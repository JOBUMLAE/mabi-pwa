// 제작 계산기
function calcMake() {
  const count = Number(document.getElementById("makeCount").value);
  const perOne = Number(document.getElementById("materialPerOne").value);

  if (!count || !perOne) {
    document.getElementById("makeResult").innerText =
      "값을 모두 입력해 주세요.";
    return;
  }

  const total = count * perOne;

  document.getElementById("makeResult").innerText =
    `총 필요 재료: ${total.toLocaleString()}개`;
}

// 강화계산기
function calcEnhance() {
  const start = Number(document.getElementById("startLevel").value);
  const target = Number(document.getElementById("targetLevel").value);
  const cost = Number(document.getElementById("costPerTry").value);

  if (target <= start) {
    document.getElementById("enhanceResult").innerText =
      "목표 강화 단계가 더 높아야 합니다.";
    return;
  }

  let totalCost = 0;

  for (let i = start + 1; i <= target; i++) {
    totalCost += cost;
  }

  document.getElementById("enhanceResult").innerText =
    `총 강화 비용: ${totalCost.toLocaleString()} 골드`;
}


// 체크 상태 저장
const daily = document.getElementById("daily");
daily.checked = localStorage.getItem("daily") === "true";

daily.addEventListener("change", () => {
  localStorage.setItem("daily", daily.checked);

  
});

/* 시작 화면 제어 */
function startApp() {
  const name = document.getElementById("characterName").value.trim();

  if (!name) {
    alert("캐릭터 이름을 입력해 주세요.");
    return;
  }

  localStorage.setItem("currentCharacter", name);
  localStorage.setItem("started", "true");

  showApp();
}

function showApp() {
  const name = localStorage.getItem("currentCharacter");

  document.getElementById("startScreen").classList.add("hidden");
  document.getElementById("appScreen").classList.remove("hidden");

  document.getElementById("currentCharacter").innerText = ` (${name})`;
}

/* 자동 진입 */
if (localStorage.getItem("started") === "true") {
  showApp();
}

/* 탭 전환 (기존 함수 살짝 개선) */
function openTab(tabId, btn) {
  document.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".tab-content").forEach(t => t.classList.remove("active"));

  document.getElementById(tabId).classList.add("active");
  btn.classList.add("active");
}

