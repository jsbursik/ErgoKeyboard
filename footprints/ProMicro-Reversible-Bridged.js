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

/*
Mapping out A single pin > bridge > VIA so I can just make all 24 pins programmatically

Thru-hole for MCU pin
(pad "" thru_hole circle (at X Y) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))

SMD Pads from MCU pin to Bridge (F and B Copper doesn't break mask)
(pad "" smd custom (at X Y) (size 0.25 1) (layers F.Cu) (zone_connect 0) (options (clearance outline) (anchor rect)) (primitives))
(pad "" smd custom (at X Y) (size 0.25 1) (layers B.Cu) (zone_connect 0) (options (clearance outline) (anchor rect)) (primitives))

Bridge Pad FROM MCU pin
(pad "" smd custom (at {X} {Y}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0)))
)
(pad "" smd custom (at {X} {Y}) (size 0.1 0.1) (layers B.Cu B.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0)))
)

Mask hole for bridge
(fp_rect (start {X} {Y}) (end {X+1.016} {Y+1.016}) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask"))
(fp_rect (start {X} {Y}) (end {X+1.016} {Y+1.016}) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask"))

Bridge Pad TO via
(pad {NUM} smd custom (at {X} {Y}) (size 1.2 0.5) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0)))
)
(pad {NUM} smd custom (at {X} {Y}) (size 1.2 0.5) (layers B.Cu B.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0)))
)

VIA
(pad {NUM} thru_hole circle (at {X}} {Y}) (size 0.8 0.8) (drill 0.4) (layers *.Cu))

Mask breakthrough for VIA (Just in case)
(fp_circle (center {X} {Y}) (end {X+0.125} {Y}) (layer F.Mask) (width 0.25))
(fp_circle (center {X} {Y}) (end {X+0.125} {Y}) (layer B.Mask) (width 0.25))

FRONT SMD Pad to VIA
(pad {NUM} smd custom (at {X} {Y}) (size 0.25 0.25) (layers F.Cu)
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
      (gr_line (start 0.766 -0.766) (end 0.766 -3.298) (width 0.25))
      (gr_line (start 0.766 -3.298) (end 0 -4.064) (width 0.25))
    ))

BACK SMD Pad FROM VIA to SAME PIN NUM on the opposite side
(pad {NUM} smd custom (at {X} {Y}) (size 0.25 0.25) (layers B.Cu)
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
      (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
      (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
    ))

*/
