module.exports = {
  params: {
    MOSI: { type: "net", value: "MOSI" },
    SCK: { type: "net", value: "SCK" },
    VCC: { type: "net", value: "VCC" },
    GND: { type: "net", value: "GND" },
    CS: { type: "net", value: "CS" },
  },
  body: (p) => {
    return `
    (module "reversible_oled_jumpers" (layer F.Cu)
    ${p.at}
    
    (fp_text reference "${p.ref}" (at 0 -3.429 ${p.rot}) ${p.ref_hide} (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.1)))
    )
    (fp_text value "rev_oled" (at 0 1.905 ${p.rot}) hide (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.15)))
    )

    (fp_text user "RIGHT" (at 0 -1.54 ${p.rot}) (layer "F.SilkS")
      (effects (font (size 1 1) (thickness 0.1)))
    )
    (fp_text user "LEFT" (at 0 -1.54 ${p.rot}) (layer "B.SilkS")
      (effects (font (size 1 1) (thickness 0.1)) (justify mirror))
    )

    (pad "" smd custom (at -4 -0.508 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
      (clearance 0.1) (zone_connect 0)
      (options (clearance outline) (anchor rect))
      (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0)))
    )
    (pad "" smd custom (at -4 -0.508 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
        (clearance 0.1) (zone_connect 0)
        (options (clearance outline) (anchor rect))
        (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0)))
    )

    (fp_rect (start -4.53 -0.762) (end -3.514 .254) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask"))
    (fp_rect (start -4.53 -0.762) (end -3.514 .254) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask"))

    (pad "" smd custom (at -4 0.508 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask)
        (clearance 0.1) (zone_connect 0)
        (options (clearance outline) (anchor rect))
        (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0)))
    )
    (pad "" smd custom (at -4 0.508 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask)
        (clearance 0.1) (zone_connect 0)
        (options (clearance outline) (anchor rect))
        (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0)))
    )

    (pad "" smd custom (at -2 -0.508 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0)))
    )
    (pad "" smd custom (at -2 -0.508 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
        (clearance 0.1) (zone_connect 0)
        (options (clearance outline) (anchor rect))
        (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0)))
    )

    (fp_rect (start -2.53 -0.762) (end -1.47 .254) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask"))
    (fp_rect (start -2.53 -0.762) (end -1.47 .254) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask"))

    (pad "" smd custom (at -2 0.508 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask)
        (clearance 0.1) (zone_connect 0)
        (options (clearance outline) (anchor rect))
        (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0)))
    )
    (pad "" smd custom (at -2 0.508 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask)
        (clearance 0.1) (zone_connect 0)
        (options (clearance outline) (anchor rect))
        (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0)))
    )

    (pad "" smd custom (at 0 -0.508 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0)))
    )
    (pad "" smd custom (at 0 -0.508 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
        (clearance 0.1) (zone_connect 0)
        (options (clearance outline) (anchor rect))
        (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0)))
    )

    (fp_rect (start -0.53 -0.762) (end 0.53 .254) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask"))
    (fp_rect (start -0.53 -0.762) (end 0.53 .254) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask"))

    (pad "" smd custom (at 0 0.508 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask)
        (clearance 0.1) (zone_connect 0)
        (options (clearance outline) (anchor rect))
        (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0)))
    )
    (pad "" smd custom (at 0 0.508 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask)
        (clearance 0.1) (zone_connect 0)
        (options (clearance outline) (anchor rect))
        (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0)))
    )

    (pad "" smd custom (at 2 -0.508 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0)))
    )
    (pad "" smd custom (at 2 -0.508 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
        (clearance 0.1) (zone_connect 0)
        (options (clearance outline) (anchor rect))
        (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0)))
    )

    (fp_rect (start 1.47 -0.762) (end 2.486 .254) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask"))
    (fp_rect (start 1.47 -0.762) (end 2.486 .254) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask"))

    (pad "" smd custom (at 2 0.508 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask)
        (clearance 0.1) (zone_connect 0)
        (options (clearance outline) (anchor rect))
        (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0)))
    )
    (pad "" smd custom (at 2 0.508 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask)
        (clearance 0.1) (zone_connect 0)
        (options (clearance outline) (anchor rect))
        (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0)))
    )

    (pad "" smd custom (at 4 -0.508 ${p.rot}) (size 0.1 0.1) (layers F.Cu F.Mask)
    (clearance 0.1) (zone_connect 0)
    (options (clearance outline) (anchor rect))
    (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0)))
    )
    (pad "" smd custom (at 4 -0.508 ${p.rot}) (size 0.1 0.1) (layers B.Cu B.Mask)
        (clearance 0.1) (zone_connect 0)
        (options (clearance outline) (anchor rect))
        (primitives (gr_poly (pts (xy 0.6 -0.4) (xy -0.6 -0.4) (xy -0.6 -0.2) (xy 0 0.4) (xy 0.6 -0.2)) (width 0)))
    )

    (fp_rect (start 3.47 -0.762) (end 4.486 .254) (stroke (width 0.1) (type solid)) (fill solid) (layer "F.Mask"))
    (fp_rect (start 3.47 -0.762) (end 4.486 .254) (stroke (width 0.1) (type solid)) (fill solid) (layer "B.Mask"))

    (pad "" smd custom (at 4 0.508 ${p.rot}) (size 1.2 0.5) (layers F.Cu F.Mask)
        (clearance 0.1) (zone_connect 0)
        (options (clearance outline) (anchor rect))
        (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0)))
    )
    (pad "" smd custom (at 4 0.508 ${p.rot}) (size 1.2 0.5) (layers B.Cu B.Mask)
        (clearance 0.1) (zone_connect 0)
        (options (clearance outline) (anchor rect))
        (primitives (gr_poly (pts (xy 0.6 0) (xy -0.6 0) (xy -0.6 -1) (xy 0 -0.4) (xy 0.6 -1)) (width 0)))
    )

    )
    `;
  },
};
