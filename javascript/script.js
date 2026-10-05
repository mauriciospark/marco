/*
  ============================================================================
  PROPRIETÁRIO: Mauricio Spark
  MARCA:        SparkMauricio
  PROJETO:      Marco
  VERSÃO:       v1.1.0
  LINHAGEM:     SPARK
  ============================================================================
  Sistema de Registro de Recibos de Compra e Venda de Terra / Posse Rural
  COPYRIGHT: © 2026 / Mauricio Spark. Todos os direitos reservados.
  ============================================================================
*/

document.addEventListener("DOMContentLoaded", () => {
  const DEFAULT_MSG =
    "Informe largura e comprimento para calcular a área aproximada.";

  function limpar() {
    if (!confirm("Apagar todos os campos preenchidos?")) return;
    document.querySelectorAll("input").forEach((input) => {
      if (input.type === "checkbox") {
        input.checked = false;
      } else {
        input.value = "";
      }
    });
    document.getElementById("calc").textContent = DEFAULT_MSG;
    document.getElementById("gallery").innerHTML = "";
  }

  function calc() {
    const l = parseFloat(document.getElementById("larg").value);
    const c = parseFloat(document.getElementById("comp").value);
    const el = document.getElementById("calc");

    if (l > 0 && c > 0) {
      const m = l * c;
      const ha = m / 10000;
      el.textContent = `Área aproximada: ${m.toLocaleString("pt-BR")} m² (${ha.toLocaleString("pt-BR", { maximumFractionDigits: 4 })} ha), válida para terreno retangular.`;
      const a = document.getElementById("area");
      if (!a.value) a.value = `${m.toLocaleString("pt-BR")} m²`;
    } else {
      el.textContent = DEFAULT_MSG;
    }
  }

  function gps() {
    const msg = document.getElementById("gpsmsg");
    const gpsInput = document.getElementById("gps");

    if (!navigator.geolocation) {
      msg.textContent =
        "Este navegador não permite obter a localização. Digite as coordenadas.";
      return;
    }

    msg.textContent = "Obtendo localização...";
    gpsInput.disabled = true;

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        gpsInput.value = `${latitude.toFixed(5)}, ${longitude.toFixed(5)}`;
        msg.textContent =
          "Coordenadas preenchidas. Confira se você está no terreno.";
        gpsInput.disabled = false;
      },
      (error) => {
        let errorMsg =
          "Não foi possível obter a localização. Digite as coordenadas manualmente.";
        if (error.code === 1) {
          errorMsg =
            "Permissão de localização negada. Digite as coordenadas manualmente.";
        } else if (error.code === 2) {
          errorMsg =
            "Localização indisponível. Digite as coordenadas manualmente.";
        } else if (error.code === 3) {
          errorMsg =
            "Tempo esgotado ao obter localização. Digite as coordenadas manualmente.";
        }
        msg.textContent = errorMsg;
        gpsInput.disabled = false;
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 },
    );
  }

  function formatarCPF(value) {
    const nums = value.replace(/\D/g, "");
    if (nums.length > 11) return value.slice(0, 14);
    return nums.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }

  function formatarMoeda(value) {
    const nums = value.replace(/\D/g, "");
    if (nums.length === 0) return "";
    const valor = parseInt(nums, 10) / 100;
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  function preencherDataAtual() {
    const dataInput = document.getElementById("data");
    if (!dataInput.value) {
      const hoje = new Date();
      const options = { day: "2-digit", month: "long", year: "numeric" };
      dataInput.value = hoje.toLocaleDateString("pt-BR", options);
    }
  }

  function validarCPF(cpf) {
    const nums = cpf.replace(/\D/g, "");
    if (nums.length !== 11) return false;
    if (/^(\d)\1{10}$/.test(nums)) return false;

    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(nums[i]) * (10 - i);
    }
    let digito = 11 - (soma % 11);
    if (digito >= 10) digito = 0;
    if (digito !== parseInt(nums[9])) return false;

    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(nums[i]) * (11 - i);
    }
    digito = 11 - (soma % 11);
    if (digito >= 10) digito = 0;
    return digito === parseInt(nums[10]);
  }

  document.getElementById("larg").addEventListener("input", calc);
  document.getElementById("comp").addEventListener("input", calc);

  document
    .querySelectorAll(
      'input[placeholder*="000.000.000-00"], input[name*="cpf"]',
    )
    .forEach((input) => {
      input.addEventListener("input", (e) => {
        const formatted = formatarCPF(e.target.value);
        e.target.value = formatted;
      });
      input.addEventListener("blur", (e) => {
        const nums = e.target.value.replace(/\D/g, "");
        if (nums.length === 11 && !validarCPF(e.target.value)) {
          e.target.style.borderColor = "#e74c3c";
        } else {
          e.target.style.borderColor = "";
        }
      });
    });

  document
    .querySelectorAll('input[placeholder*="0,00"], input[name*="valor"]')
    .forEach((input) => {
      input.addEventListener("input", (e) => {
        const formatted = formatarMoeda(e.target.value);
        e.target.value = formatted;
      });
    });

  preencherDataAtual();

  function handlePhotos(input) {
    const gallery = document.getElementById("gallery");
    const files = input.files;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (!file.type.startsWith("image/")) continue;

      const reader = new FileReader();
      reader.onload = (e) => {
        const item = document.createElement("div");
        item.className = "gallery-item";

        const img = document.createElement("img");
        img.src = e.target.result;
        img.alt = file.name;

        const removeBtn = document.createElement("button");
        removeBtn.className = "remove";
        removeBtn.innerHTML = "×";
        removeBtn.onclick = () => item.remove();

        item.appendChild(img);
        item.appendChild(removeBtn);
        gallery.appendChild(item);
      };
      reader.readAsDataURL(file);
    }
  }

  window.limpar = limpar;
  window.gps = gps;
  window.handlePhotos = handlePhotos;
});
