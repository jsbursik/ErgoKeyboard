// Promicro/nice!nano reversible footprint
// Translated/altered by jsbursik
// This will rely on the Promicro/Nano being "up"

module.exports = {
  params: {
    designator: "MCU",
    orientation: "up",
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
    let output = `
    (module revmicro (layer F.Cu)
    ${p.at}

    ${"" /* footprint reference */}
    (fp_text reference "${p.ref}" (at -16.256 -0.254 ${p.rot + 90}) (layer "F.SilkS") (effects (font (size 1.2 1.2) (thickness 0.2032))))
    (fp_text value "rev_mcu" (at 16.51 0 ${p.rot + 90}) (layer "F.SilkS") hide (effects (font (size 1.2 1.2) (thickness 0.2032))))

    ${"" /* Outline */}
    (fp_rect (start -15.24 -8.89) (end 15.24 8.89) (stroke (width 0.15) (type solid)) (fill none) (layer "F.SilkS"))

    ${"" /* All vias, to make nets work */}
    (pad 1 thru_hole circle (at -13.97 -0.762 0) ( size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.P1.str})
    (pad 2 thru_hole circle (at -11.43 -0.762 0) ( size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.P0.str})
    (pad 3 thru_hole circle (at -8.89 -0.762 0) ( size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.GND.str})
    (pad 4 thru_hole circle (at -6.35 -0.762 0) ( size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.GND.str})
    (pad 5 thru_hole circle (at -3.81 -0.762 0) ( size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.P2.str})
    (pad 6 thru_hole circle (at -1.27 -0.762 0) ( size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.P3.str})
    (pad 7 thru_hole circle (at 1.27 -0.762 0) ( size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.P4.str})
    (pad 8 thru_hole circle (at 3.81 -0.762 0) ( size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.P5.str})
    (pad 9 thru_hole circle (at 6.35 -0.762 0) ( size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.P6.str})
    (pad 10 thru_hole circle (at 8.89 -0.762 0) ( size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.P7.str})
    (pad 11 thru_hole circle (at 11.43 -0.762 0) ( size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.P8.str})
    (pad 12 thru_hole circle (at 13.97 -0.762 0) ( size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.P9.str})

    (pad 13 thru_hole circle (at -13.97 0.762 ) ( size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.RAW.str})
    (pad 14 thru_hole circle (at -11.43 0.762 0) ( size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.GND.str})
    (pad 15 thru_hole circle (at -8.89 0.762 0) ( size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.RST.str})
    (pad 16 thru_hole circle (at -6.35 0.762 0) ( size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.VCC.str})
    (pad 17 thru_hole circle (at -3.81 0.762 0) ( size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.P21.str})
    (pad 18 thru_hole circle (at -1.27 0.762 0) ( size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.P20.str})
    (pad 19 thru_hole circle (at 1.27 0.762 0) ( size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.P19.str})
    (pad 20 thru_hole circle (at 3.81 0.762 0) ( size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.P18.str})
    (pad 21 thru_hole circle (at 6.35 0.762 0) ( size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.P15.str})
    (pad 22 thru_hole circle (at 8.89 0.762 0) ( size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.P14.str})
    (pad 23 thru_hole circle (at 11.43 0.762 0) ( size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.P16.str})
    (pad 24 thru_hole circle (at 13.97 0.762 0) ( size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.P10.str})
    `;

    // I know these arrays below look ridiculous, but I needed to avoid float math
    let xArr = [-13.97, -11.43, -8.89, -6.35, -3.81, -1.27, 1.27, 3.81, 6.35, 8.89, 11.43, 13.97];
    let yArr = [7.62, 6.35, 5.842, 6.096, 5.08, 4.826, 0.762];
    for (let i = 0; i < 24; i++) {
      let X = xArr[i % 12];
      let PIN = i < 12 ? i + 1 : 24 - (i % 12);
      let ROT = i <= 11 ? 0 : 180;
      let sign = i <= 11 ? "-" : "";
      output += `
        ${"" /* Thru-hole for MCU pin */}
        (pad "" thru_hole circle (at ${X} ${sign}${yArr[0]}) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))

        ${"" /* SMD Pads from MCU pin to Bridge (F and B Copper doesn't break mask) */}
        (pad "" smd custom (at ${X} ${sign}${yArr[1]} ${p.rot}) (size 0.25 1) (layers F.Cu) (zone_connect 0) (options (clearance outline) (anchor rect)) (primitives))
        (pad "" smd custom (at ${X} ${sign}${yArr[1]} ${p.rot}) (size 0.25 1) (layers B.Cu) (zone_connect 0) (options (clearance outline) (anchor rect)) (primitives))

        ${"" /* Bridge Pad FROM MCU pin */}
        (pad "" smd custom (at ${X} ${sign}${yArr[2]} ${p.rot + ROT}) (size 0.1 0.1) (layers F.Cu F.Mask)
            (clearance 0.1) (zone_connect 0)
            (options (clearance outline) (anchor rect))
            (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0)))
        )
        (pad "" smd custom (at ${X} ${sign}${yArr[2]} ${p.rot + ROT}) (size 0.1 0.1) (layers B.Cu B.Mask)
            (clearance 0.1) (zone_connect 0)
            (options (clearance outline) (anchor rect))
            (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0)))
        )

        ${"" /* Mask hole for bridge */}
        (fp_rect (start ${parseFloat(X - 0.508).toPrecision(3)} ${sign}${yArr[3]}) (end ${parseFloat(X + 0.508).toPrecision(3)} ${sign}${yArr[4]}) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask"))
        (fp_rect (start ${parseFloat(X - 0.508).toPrecision(3)} ${sign}${yArr[3]}) (end ${parseFloat(X + 0.508).toPrecision(3)} ${sign}${yArr[4]}) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask"))

        ${"" /* Bridge Pad TO via */}
        (pad ${PIN} smd custom (at ${X} ${sign}${yArr[5]} ${p.rot + ROT}) (size 1.2 0.5) (layers F.Cu F.Mask)
            (clearance 0.1) (zone_connect 0)
            (options (clearance outline) (anchor rect))
            (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0)))
        )
        (pad ${PIN} smd custom (at ${X} ${sign}${yArr[5]} ${p.rot + ROT}) (size 1.2 0.5) (layers B.Cu B.Mask)
            (clearance 0.1) (zone_connect 0)
            (options (clearance outline) (anchor rect))
            (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0)))
        )
        
        ${"" /* Mask breakthrough for VIA (Just in case) */}
        (fp_circle (center ${X} ${sign}${yArr[6]}) (end ${X + 0.125} ${sign}${yArr[6]}) (layer F.Mask) (width 0.25))
        (fp_circle (center ${X} ${sign}${yArr[6]}) (end ${X + 0.125} ${sign}${yArr[6]}) (layer B.Mask) (width 0.25))

        ${"" /* FRONT SMD Pad to VIA */}
        (pad ${PIN} smd custom (at ${X} ${sign}${yArr[6]} ${p.rot + ROT}) (size 0.25 0.25) (layers F.Cu)
            (zone_connect 0)
            (options (clearance outline) (anchor circle))
            (primitives
              (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
              (gr_line (start 0.766 -0.766) (end 0.766 -3.298) (width 0.25))
              (gr_line (start 0.766 -3.298) (end 0 -4.064) (width 0.25))
            ))
            
        ${"" /* BACK SMD Pad FROM VIA to SAME PIN NUM on the opposite side */}
        (pad ${PIN} smd custom (at ${X} ${sign}${yArr[6]} ${p.rot + ROT}) (size 0.25 0.25) (layers B.Cu)
            (zone_connect 0)
            (options (clearance outline) (anchor circle))
            (primitives
              (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
              (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
              (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
            ))
      `;
    }
    output += ")";
    return output;
  },
};

/*
Mapping out A single pin > bridge > VIA so I can just make all 24 pins programmatically

X & Y == 0

Thru-hole for MCU pin
(pad "" thru_hole circle (at ${X} ${Y}) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))

SMD Pads from MCU pin to Bridge (F and B Copper doesn't break mask)
(pad "" smd custom (at ${X} ${Y + 1.27}) (size 0.25 1) (layers F.Cu) (zone_connect 0) (options (clearance outline) (anchor rect)) (primitives))
(pad "" smd custom (at ${X} ${Y + 1.27}) (size 0.25 1) (layers B.Cu) (zone_connect 0) (options (clearance outline) (anchor rect)) (primitives))

Bridge Pad FROM MCU pin
(pad "" smd custom (at ${X} ${Y + 1.778}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0)))
)
(pad "" smd custom (at ${X} ${Y + 1.778}) (size 0.1 0.1) (layers B.Cu B.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0)))
)

Mask hole for bridge
(fp_rect (start ${X - 0.508} ${Y + 1.524}) (end ${X + 0.508} ${Y + 2.54}) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask"))
(fp_rect (start ${X - 0.508} ${Y + 1.524}) (end ${X + 0.508} ${Y + 2.54}) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask"))

Bridge Pad TO via
(pad ${NUM} smd custom (at ${X} ${Y + 2.794}) (size 1.2 0.5) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0)))
)
(pad ${NUM} smd custom (at ${X} ${Y + 2.794}) (size 1.2 0.5) (layers B.Cu B.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0)))
)

VIA
(pad ${NUM} thru_hole circle (at ${X} ${Y + 6.858}) (size 0.8 0.8) (drill 0.4) (layers *.Cu))

Mask breakthrough for VIA (Just in case)
(fp_circle (center ${X} ${Y + 6.858}) (end ${X + 0.125} ${Y}) (layer F.Mask) (width 0.25))
(fp_circle (center ${X} ${Y + 6.858}) (end ${X + 0.125} ${Y}) (layer B.Mask) (width 0.25))

FRONT SMD Pad to VIA
(pad ${NUM} smd custom (at ${X} ${Y + 6.858}) (size 0.25 0.25) (layers F.Cu)
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
      (gr_line (start 0.766 -0.766) (end 0.766 -3.298) (width 0.25))
      (gr_line (start 0.766 -3.298) (end 0 -4.064) (width 0.25))
    ))

BACK SMD Pad FROM VIA to SAME PIN NUM on the opposite side
(pad ${NUM} smd custom (at ${X} ${Y + 6.858}) (size 0.25 0.25) (layers B.Cu)
    (zone_connect 0)
    (options (clearance outline) (anchor circle))
    (primitives
      (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
      (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
      (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
    ))
*/
