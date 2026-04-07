const shiftData = {
  大山店: {
    2026: {
      4: {
        池田: {
          4: "",
          5: "",
          6: "",
          7: "",

          10: "",
          11: "",
          12: "",
          13: "",
          14: "",
          15: "",

          17: "",
          18: "",
          19: "",
          20: "",
          21: "",
          22: "",

          24: "",
          25: "",
          26: "",
          27: "",
          28: "",
        },
        澤井: {
          1: "",
          2: "",
          3: "",
          8: "",
          9: "",
          16: "",
          23: "",
          29: "",
          30: "",
        },
        菊池: {
          1: "",
          3: "",
          4: "",
          5: "",
          7: "",
          8: "",
          9: "",
          11: "",

          14: "",
          15: "",
          16: "",
          18: "",
          19: "",
          20: "",
          22: "",
          23: "",
          25: "",
          26: "",
          27: "",

          29: "",
          30: "",
        },
        渡部: { 10: "", 13: "", 17: "" },
        小野: { 1: "", 11: "14:00~" },
        川口: { 12: "" },
        宮下: { 2: "", 9: "", 13: "", 14: "", 16: "", 23: "", 28: "" },

        松浦: {
          7: "",
          8: "",
          15: "",
          21: "",
          22: "",
          28: "",
          29: "",
        },
        清水: {
          3: "",
          4: "",
          6: "",
          10: "",
          11: "",
          17: "",
          18: "",
          20: "",
          24: "",
          25: "",
          27: "",
          30: "",
        },
        中西: {
          2: "",
          5: "",
          6: "",
          21: "",
        },
        高橋: {
          12: "",
          19: "",
          24: "",
          26: "",
        },
      },
    },
  },
  学芸大学店: {
    2026: {
      4: {
        上原: {
          2: "",
          3: "",
          4: "",
          5: "",
          6: "",
          7: "",
          9: "",
          10: "",
          11: "",
          12: "",
          13: "",
          16: "",
          17: "",
          18: "",
          19: "",
          20: "",
          23: "",
          24: "",
          25: "",
          26: "",
          27: "",
          29: "",
          30: "",
        },
        澤井: {
          4: "",
          5: "",
          10: "",
          11: "",
          12: "",
          15: "",
          17: "",
          18: "",
          19: "",
          21: "",
          22: "",
          24: "",
          25: "",
          26: "",
          28: "",
        },
        中嶋: {
          1: "~19:00",
          3: "10:00~",
          4: "",
          5: "",
          7: "10:00~",
          8: "~19:00",
          10: "~19:00",
          11: "",
          13: "10:00~",
          14: "10:00~",
          15: "~19:00",
          17: "~19:00",
          18: "",
          19: "",
          20: "10:00~",
          25: "",
          26: "",
          27: "~19:00",
          29: "",
          30: "10:00~",
        },
        田村: {
          2: "",
          3: "",
          4: "",
          5: "",
          6: "",
          8: "",
          9: "",
          10: "",
          11: "",
          12: "",
          15: "",
          16: "",
          17: "10:00~",
          18: "",
          19: "",
          21: "",
          22: "",
          23: "",
          25: "",
          26: "",
          27: "10:00~",
          28: "",
          29: "",
        },
        高橋: {
          1: "",
          5: "14:00~",
          8: "",
          9: "16:00~",
          13: "~14:00",
          15: "",
          20: "",
          22: "",
          23: "16:00~",
          27: "~14:00",
          29: "",
          30: "",
        },
        中西: {
          1: "",
          11: "10:00~",
          12: "",
          14: "",
          20: "",
          24: "",
          30: "",
        },
        伊藤: {
          2: "9:30~16:00",
          3: "9:30~16:00",
          7: "9:30~16:00",
          9: "9:30~16:00",
          10: "9:30~16:00",
          14: "9:30~16:00",
          16: "9:30~16:00",
          21: "9:30~16:00",
          23: "9:30~16:00",
          24: "9:30~16:00",
          28: "9:30~16:00",
          30: "9:30~16:00",
        },
        佐藤: {
          6: "10:00~",
          13: "10:00~",
          28: "10:00~",
        },
        岡本: {
          7: "10:00~",
        },
        渡部: {
          1: "10:00~",
          2: "10:00~",
          6: "~14:00",
          16: "10:00~",
          22: "10:00~",
          25: "",
          27: "10:00~",
        },
        小野: {
          8: "14:00~",
          9: "15:00~",
          12: "13:00~",
          14: "10:00~",
          17: "15:00~",
          20: "16:00~",
          23: "15:00~",
        },
        清水: {
          2: "~19:00",
          7: "~19:00",
          9: "~19:00",
          13: "~19:00",
          14: "~19:00",
          16: "~19:00",
          21: "~19:00",
          23: "~19:00",
        },
        楠: {
          3: "10:00~",
          4: "",
          6: "10:00~",
          8: "10:00~",
          18: "",
          19: "",
          21: "10:00~",
          24: "10:00~",
          26: "",
          28: "10:00~",
          29: "",
        },
      },
    },
  },
};

/*====5月シフト====*/
shiftData["大山店"][2026][5] = {};
shiftData["学芸大学店"][2026][5] = {};

function renderCalendar(shopName, year, month, elementId) {
  const firstDay = new Date(year, month - 1, 1).getDay();
  const lastDate = new Date(year, month, 0).getDate();

  const monthData =
    shiftData[shopName] &&
    shiftData[shopName][year] &&
    shiftData[shopName][year][month]
      ? shiftData[shopName][year][month]
      : {};

  let html = "<tr>";
  const days = ["日", "月", "火", "水", "木", "金", "土"];
  days.forEach((d) => (html += "<th>" + d + "</th>"));
  html += "</tr><tr>";

  for (let i = 0; i < firstDay; i++) {
    html += "<td></td>";
  }

  for (let d = 1; d <= lastDate; d++) {
    const dayOfWeek = new Date(year, month - 1, d).getDay();
    let staffHtml = "";

    for (let name in monthData) {
      if (monthData[name][d] !== undefined) {
        const time = monthData[name][d];

        staffHtml += `
    <div class="staff-name">
      ${name}
      ${time ? "<br>" + time : ""}
    </div>
  `;
      }
    }

    const today = new Date();
    const isToday =
      year === today.getFullYear() &&
      month === today.getMonth() + 1 &&
      d === today.getDate();
    html += `
      <td>
        <div class="date-number ${isToday ? "today" : ""} ${dayOfWeek === 0 ? "sunday" : ""} ${dayOfWeek === 6 ? "saturday" : ""}">${d}</div>
        ${staffHtml}
      </td>
    `;

    if ((firstDay + d) % 7 === 0) html += "</tr><tr>";
  }

  html += "</tr>";

  document.getElementById(elementId).innerHTML = html;
}

const today = new Date();
let currentYear = today.getFullYear();
let currentMonth = today.getMonth() + 1;
function changeMonth(step) {
  currentMonth += step;

  if (currentMonth > 12) {
    currentMonth = 1;
    currentYear++;
  }

  if (currentMonth < 1) {
    currentMonth = 12;
    currentYear--;
  }

  updateCalendars();
}
function updateCalendars() {
  document.getElementById("currentMonth").innerText =
    currentYear + "年 " + currentMonth + "月";

  renderCalendar("大山店", currentYear, currentMonth, "oyama");
  renderCalendar("学芸大学店", currentYear, currentMonth, "gakugei");
}
updateCalendars();
