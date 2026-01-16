/* =========================
   앱 시작 / 화면 전환
========================= */

function startApp() {
  const nameInput = document.getElementById("characterName");
  if (!nameInput) return;

  const name = nameInput.value.trim();
  if (!name) {
    alert("캐릭터 이름을 입력해 주세요.");
    return;
  }

  localStorage.setItem("currentCharacter", name);
  localStorage.setItem("started", "true");

  showApp();
}

function showApp() {
  const startScreen = document.getElementById("startScreen");
  const appScreen = document.getElementById("appScreen");
  const name = localStorage.getItem("currentCharacter");

  if (!startScreen || !appScreen) return;

  startScreen.classList.add("hidden");
  appScreen.classList.remove("hidden");

  const nameSpan = document.getElementById("currentCharacter");
  if (nameSpan && name) {
    nameSpan.innerText = ` (${name})`;
  }

  initChecklist();
}

/* 새로고침 시 자동 진입 */
if (localStorage.getItem("started") === "true") {
  showApp();
}

/* =========================
   탭 전환
========================= */

function openTab(tabId, btn) {
  document.querySelectorAll(".tab").forEach(b =>
    b.classList.remove("active")
  );
  document.querySelectorAll(".tab-content").forEach(t =>
    t.classList.remove("active")
  );

  const target = document.getElementById(tabId);
  if (target) {
    target.classList.add("active");
  }

  // btn이 없을 수도 있으므로 방어
  if (btn) {
    btn.classList.add("active");
  }
}

/* =========================
   체크리스트 저장 (캐릭터별)
========================= */

function initChecklist() {
  const character = localStorage.getItem("currentCharacter");
  if (!character) return;

  document.querySelectorAll("input[type=checkbox]").forEach(box => {
    const dataKey = box.dataset.key;
    if (!dataKey) return;

    const key = `${character}_${dataKey}`;

    // 저장된 값 불러오기
    box.checked = localStorage.getItem(key) === "true";

    // 변경 시 저장
    box.addEventListener("change", () => {
      localStorage.setItem(key, box.checked);
    });
  });
}

/* =========================
   제작 계산기
========================= */

function calcMake() {
  const count = Number(document.getElementById("makeCount")?.value);
  const perOne = Number(document.getElementById("materialPerOne")?.value);
  const result = document.getElementById("makeResult");

  if (!result) return;

  if (!count || !perOne) {
    result.innerText = "값을 모두 입력해 주세요.";
    return;
  }

  const total = count * perOne;
  result.innerText = `총 필요 재료: ${total.toLocaleString()}개`;
}

/* =========================
   (디버그용 – 필요 없으면 삭제 가능)
========================= */
// console.log("app.js 정상 로드됨");
