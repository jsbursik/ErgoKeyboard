// Promicro/nice!nano reversible footprint
// Translated/altered by jsbursik
// This will rely on the Promicro/Nano being "up"

module.exports = {
  params: {
    designator: "MCU",
    RAW: { type: "net", value: "RAW" }, // RAW or BAT+
    GND: { type: "net", value: "GND" },
    RST: { type: "net", value: "RST" },
    VCC: { type: "net", value: "VCC" }, // 3.3V
    P21: { type: "net", value: "P21" },
    P20: { type: "net", value: "P20" },
    P19: { type: "net", value: "P19" },
    P18: { type: "net", value: "P18" },
    P15: { type: "net", value: "P15" },
    P14: { type: "net", value: "P14" },
    P16: { type: "net", value: "P16" },
    P10: { type: "net", value: "P10" },
    P1: { type: "net", value: "P1" },
    P0: { type: "net", value: "P0" },
    P2: { type: "net", value: "P2" },
    P3: { type: "net", value: "P3" },
    P4: { type: "net", value: "P4" },
    P5: { type: "net", value: "P5" },
    P6: { type: "net", value: "P6" },
    P7: { type: "net", value: "P7" },
    P8: { type: "net", value: "P8" },
    P9: { type: "net", value: "P9" },
  },
  body: (p) => {
    const num_pins = 24;
    let params = {
      sockets_x_start: -13.97,
      sockets_y: 7.62,
    };

    for (let i = 1; i <= num_pins; i++) {}
  },
};
