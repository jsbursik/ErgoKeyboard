let output = "";
for (let i = 1; i <= 24; i++) {
  let xArr = [-13.97, -11.43, -8.89, -6.35, -3.81, -1.27, 1.27, 3.81, 6.35, 8.89, 11.43, 13.97];
  let X = xArr[i % 12];
  let yArr = [7.62, 6.35, 5.842, 6.096, 5.08, 4.826, 0.762];
  let Y = yArr[i % 6];
  let sign = i <= 12 ? "-" : "";
  output += `
        ${"" /* Thru-hole for MCU pin */}
        (pad "" thru_hole circle (at ${X} ${sign}${Y}) (size 1.6 1.6) (drill 1.1) (layers *.Cu *.Mask))

        ${"" /* SMD Pads from MCU pin to Bridge (F and B Copper doesn't break mask) */}
        (pad "" smd custom (at ${X} ${sign}${Y}) (size 0.25 1) (layers F.Cu) (zone_connect 0) (options (clearance outline) (anchor rect)) (primitives))
        (pad "" smd custom (at ${X} ${sign}${Y}) (size 0.25 1) (layers B.Cu) (zone_connect 0) (options (clearance outline) (anchor rect)) (primitives))

        ${"" /* Bridge Pad FROM MCU pin */}
        (pad "" smd custom (at ${X} ${sign}${Y}) (size 0.1 0.1) (layers F.Cu F.Mask)
            (clearance 0.1) (zone_connect 0)
            (options (clearance outline) (anchor rect))
            (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0)))
        )
        (pad "" smd custom (at ${X} ${sign}${Y}) (size 0.1 0.1) (layers B.Cu B.Mask)
            (clearance 0.1) (zone_connect 0)
            (options (clearance outline) (anchor rect))
            (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0)))
        )

        ${"" /* Mask hole for bridge */}
        (fp_rect (start ${parseFloat(X - 0.508).toPrecision(3)} ${sign}${Y}) (end ${parseFloat(X - 0.508).toPrecision(
    3
  )} ${sign}${Y}) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask"))
        (fp_rect (start ${parseFloat(X - 0.508).toPrecision(3)} ${sign}${Y}) (end ${parseFloat(X - 0.508).toPrecision(
    3
  )} ${sign}${Y}) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask"))

        ${"" /* Bridge Pad TO via */}
        (pad ${i} smd custom (at ${X} ${sign}${Y}) (size 1.2 0.5) (layers F.Cu F.Mask)
            (clearance 0.1) (zone_connect 0)
            (options (clearance outline) (anchor rect))
            (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0)))
        )
        (pad ${i} smd custom (at ${X} ${sign}${Y}) (size 1.2 0.5) (layers B.Cu B.Mask)
            (clearance 0.1) (zone_connect 0)
            (options (clearance outline) (anchor rect))
            (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0)))
        )

        ${"" /* VIA */}
        (pad ${i} thru_hole circle (at ${X} ${sign}${Y}) (size 0.8 0.8) (drill 0.4) (layers *.Cu))

        ${"" /* Mask breakthrough for VIA (Just in case) */}
        (fp_circle (center ${X} ${sign}${Y}) (end ${X + 0.125} ${sign}${Y}) (layer F.Mask) (width 0.25))
        (fp_circle (center ${X} ${sign}${Y}) (end ${X + 0.125} ${sign}${Y}) (layer B.Mask) (width 0.25))

        ${"" /* FRONT SMD Pad to VIA */}
        (pad ${i} smd custom (at ${X} ${sign}${Y}) (size 0.25 0.25) (layers F.Cu)
            (zone_connect 0)
            (options (clearance outline) (anchor circle))
            (primitives
              (gr_line (start 0 0) (end 0.766 -0.766) (width 0.25))
              (gr_line (start 0.766 -0.766) (end 0.766 -3.298) (width 0.25))
              (gr_line (start 0.766 -3.298) (end 0 -4.064) (width 0.25))
            ))
            
        ${"" /* BACK SMD Pad FROM VIA to SAME PIN NUM on the opposite side */}
        (pad ${i} smd custom (at ${X} ${sign}${Y}) (size 0.25 0.25) (layers B.Cu)
            (zone_connect 0)
            (options (clearance outline) (anchor circle))
            (primitives
              (gr_line (start 0 0) (end -0.766 0.766) (width 0.25))
              (gr_line (start -0.766 0.766) (end -0.766 4.822) (width 0.25))
              (gr_line (start -0.766 4.822) (end 0 5.588) (width 0.25))
            ))
      `;
}
console.log(output);
