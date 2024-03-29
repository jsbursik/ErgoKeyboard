module.exports = {
  params: {
    designator: "S",
    side: "F",
    hotswap: false,
    reverse: false,
    keycaps: false,
    from: undefined,
    to: undefined,
  },
  body: (p) => {
    const standard = `
      (module lib:gateron-ks27 (layer "F.Cu") (tedit 625D4425)
      ${p.at /* parametric position */}
      
      ${"" /* footprint reference */}
      (fp_text reference "${p.ref}" (at 0.1 -8.5 ${p.rot}) (layer "F.SilkS") ${p.ref_hide}
        (effects (font (size 1 1) (thickness 0.15)))
      )
    
      (fp_text value "ks27" (at 0 8.5 ${p.rot}) (layer "F.SilkS") hide
        (effects (font (size 1 1) (thickness 0.15)))
      )
    
      ${"" /* LED Cutout */}
      (fp_line (start 1.8 -6.3) (end -3.2 -6.3) (layer Dwgs.User) (width 0.12))
      (fp_line (start -3.2 -6.3) (end -3.2 -3.1) (layer Dwgs.User) (width 0.12))
      (fp_line (start 1.8 -6.3) (end 1.8 -3.1) (layer Dwgs.User) (width 0.12))
      (fp_line (start 1.8 -3.1) (end -3.2 -3.1) (layer Dwgs.User) (width 0.12))
    
      ${"" /* corner marks */}
      (fp_line (start -7 -7) (end -7 7) (layer Dwgs.User) (width 0.12))
      (fp_line (start 7 7) (end 7 -7) (layer Dwgs.User) (width 0.12))
      (fp_line (start 7 -7) (end -7 -7) (layer Dwgs.User) (width 0.12))
      (fp_line (start -7 7) (end 7 7) (layer Dwgs.User) (width 0.12))
      (fp_line (start 7.5 7.5) (end 7.5 -7.5) (layer Dwgs.User) (width 0.1))
      (fp_line (start -7.5 -7.5) (end -7.5 7.5) (layer Dwgs.User) (width 0.1))
      (fp_line (start -7.5 7.5) (end 7.5 7.5) (layer Dwgs.User) (width 0.1))
      (fp_line (start 7.5 -7.5) (end -7.5 -7.5) (layer Dwgs.User) (width 0.1))
    
      ${"" /* middle shaft */}
      (pad "" np_thru_hole circle (at 0 0) (size 5 5) (drill 5) (layers *.Cu *.Mask))
      `;
    const keycap = `
      ${"" /* keycap marks */}
      (fp_line (start -9.25 -9.25) (end 9.25 -9.25) (layer Dwgs.User) (width 0.15))
      (fp_line (start 9.25 -9.25) (end 9.25 9.25) (layer Dwgs.User) (width 0.15))
      (fp_line (start 9.25 9.25) (end -9.25 9.25) (layer Dwgs.User) (width 0.15))
      (fp_line (start -9.25 9.25) (end -9.25 -9.25) (layer Dwgs.User) (width 0.15))
      `;
    function pins(def_neg, def_pos, def_side, def_rev) {
      if (p.hotswap && !def_rev) {
        return `
          ${"" /* holes */}
          (pad "" np_thru_hole circle (at ${def_neg}4.4 4.7) (size 3 3) (drill 3) (layers *.Cu *.Mask))
          (pad "" np_thru_hole circle (at ${def_pos}2.6 5.75) (size 3 3) (drill 3) (layers *.Cu *.Mask))
          
          ${"" /* net pads */}
          (pad "1" smd rect (at ${def_neg}7.675 4.7 ${p.rot}) (size 2.6 2.6) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask) ${p.from.str})
          (pad "2" smd rect (at ${def_pos}5.875 5.75 ${p.rot}) (size 2.6 2.6) (layers ${def_side}.Cu ${def_side}.Paste ${def_side}.Mask) ${p.to.str})
        `;
      } else if (p.hotswap && def_rev) {
        return `
          ${"" /* via to help with routing */}
          (pad "1" thru_hole circle (at -7.675 8.382 180) (size 0.8 0.8) (drill 0.4) (layers *.Cu) ${p.from.str})

          ${"" /* holes */}
          (pad "" np_thru_hole circle (at -4.4 4.7) (size 3 3) (drill 3) (layers *.Cu *.Mask))
          (pad "" np_thru_hole circle (at 2.6 5.75) (size 3 3) (drill 3) (layers *.Cu *.Mask))
          (pad "" np_thru_hole circle (at -4.4 -4.7) (size 3 3) (drill 3) (layers *.Cu *.Mask))
          (pad "" np_thru_hole circle (at 2.6 -5.75) (size 3 3) (drill 3) (layers *.Cu *.Mask))
          
          ${"" /* net pads */}
          (pad "1" smd rect (at -7.675 4.7 ${p.rot}) (size 2.6 2.6) (layers B.Cu B.Paste B.Mask) ${p.from.str})
          (pad "2" smd rect (at 5.875 5.75 ${p.rot}) (size 2.6 2.6) (layers B.Cu B.Paste B.Mask) ${p.to.str})
          (pad "1" smd rect (at -7.675 -4.7 ${p.rot}) (size 2.6 2.6) (layers F.Cu F.Paste F.Mask) ${p.from.str})
          (pad "2" smd rect (at 5.875 -5.75 ${p.rot}) (size 2.6 2.6) (layers F.Cu F.Paste F.Mask) ${p.to.str})
        `;
      } else if (!p.hotswap && !def_rev) {
        return `
            ${"" /* pins */}
            (pad 1 thru_hole circle (at ${def_pos}4.4 4.7) (size 2.286 2.286) (drill 1.4986) (layers *.Cu *.Mask) ${p.from.str})
            (pad 2 thru_hole circle (at ${def_neg}2.6 5.75) (size 2.286 2.286) (drill 1.4986) (layers *.Cu *.Mask) ${p.to.str})
          `;
      } else {
        return `
            ${"" /* pins */}
            (pad 1 thru_hole circle (at -4.4 4.7) (size 2.286 2.286) (drill 1.4986) (layers *.Cu *.Mask) ${p.from.str})
            (pad 2 thru_hole circle (at 2.6 5.75) (size 2.286 2.286) (drill 1.4986) (layers *.Cu *.Mask) ${p.to.str})
            (pad 1 thru_hole circle (at -4.4 -4.7) (size 2.286 2.286) (drill 1.4986) (layers *.Cu *.Mask) ${p.from.str})
            (pad 2 thru_hole circle (at 2.6 -5.75) (size 2.286 2.286) (drill 1.4986) (layers *.Cu *.Mask) ${p.to.str})
          `;
      }
    }
    if (p.reverse) {
      return `
        ${standard}
        ${p.keycaps ? keycap : ""}
        ${pins("", "", "", true)})
        `;
    } else {
      return `
        ${standard}
        ${p.keycaps ? keycap : ""}
        ${pins("-", "", "B", false)})
        `;
    }
  },
};

/*
  (module lib:gateron-ks27-hotswap-reversible (layer "F.Cu") (tedit 625D4425)
  
  (attr through_hole)
  
  (fp_text reference "REF**" (at 0.1 -8.5 unlocked) (layer "F.SilkS")
    (effects (font (size 1 1) (thickness 0.15)))
    (tstamp 4c9fdea7-ba0c-45cc-8f66-240980c37d5c)
  )
  
  (fp_text value "gateron-ks27-hotswap-reversible" (at 0 8.5 unlocked) (layer "F.Fab")
    (effects (font (size 1 1) (thickness 0.15)))
    (tstamp c58960d9-4cac-4036-ad2e-1aef26946dae)
  )
  
  (fp_line (start 1.8 -6.3) (end -3.2 -6.3) (layer "Eco2.User") (width 0.12) (tstamp 21ae9c3a-7138-444e-be38-56a4842ab594))
  (fp_line (start -7 -7) (end -7 7) (layer "Eco2.User") (width 0.12) (tstamp 632acde9-b7fd-4f04-8cb4-d2cbb06b3595))
  (fp_line (start 7 7) (end 7 -7) (layer "Eco2.User") (width 0.12) (tstamp 67621f9e-0a6a-4778-ad69-04dcf300659c))
  (fp_line (start -3.2 -6.3) (end -3.2 -3.1) (layer "Eco2.User") (width 0.12) (tstamp 81a15393-727e-448b-a777-b18773023d89))
  (fp_line (start 7 -7) (end -7 -7) (layer "Eco2.User") (width 0.12) (tstamp 98e81e80-1f85-4152-be3f-99785ea97751))
  (fp_line (start -7 7) (end 7 7) (layer "Eco2.User") (width 0.12) (tstamp 9dab0cb7-2557-4419-963b-5ae736517f62))
  (fp_line (start 1.8 -6.3) (end 1.8 -3.1) (layer "Eco2.User") (width 0.12) (tstamp a29f8df0-3fae-4edf-8d9c-bd5a875b13e3))
  (fp_line (start 1.8 -3.1) (end -3.2 -3.1) (layer "Eco2.User") (width 0.12) (tstamp abe07c9a-17c3-43b5-b7a6-ae867ac27ea7))
  (fp_line (start 7.5 7.5) (end 7.5 -7.5) (layer "F.Fab") (width 0.1) (tstamp 0d35483a-0b12-46cc-b9f2-896fd6831779))
  (fp_line (start -7.5 -7.5) (end -7.5 7.5) (layer "F.Fab") (width 0.1) (tstamp 786b6072-5772-4bc1-8eeb-6c4e19f2a91b))
  (fp_line (start -7.5 7.5) (end 7.5 7.5) (layer "F.Fab") (width 0.1) (tstamp c3c93de0-69b1-4a04-8e0b-d78caf487c63))
  (fp_line (start 7.5 -7.5) (end -7.5 -7.5) (layer "F.Fab") (width 0.1) (tstamp ef1b4b98-541b-4673-a04f-2043250fc40a))
  (pad "" np_thru_hole circle (at -2.6 5.75) (size 3 3) (drill 3) (layers F&B.Cu *.Mask) (tstamp 6826f0e0-3ece-4ead-bb8b-6fa5edcec245))
  (pad "" np_thru_hole circle (at -4.4 4.7) (size 3 3) (drill 3) (layers F&B.Cu *.Mask) (tstamp 7bbf981c-a063-4e30-8911-e4228e1c0743))
  (pad "" np_thru_hole circle (at 4.4 4.7) (size 3 3) (drill 3) (layers F&B.Cu *.Mask) (tstamp a1511c05-e2a3-4068-8b44-a2b7f7ad4d11))
  (pad "" np_thru_hole circle (at 2.6 5.75) (size 3 3) (drill 3) (layers F&B.Cu *.Mask) (tstamp babeabf2-f3b0-4ed5-8d9e-0215947e6cf3))
  (pad "" np_thru_hole circle (at 0 0) (size 5 5) (drill 5) (layers F&B.Cu *.Mask) (tstamp afb8e687-4a13-41a1-b8c0-89a749e897fe))
  (pad "1" smd rect (at -7.675 4.7) (size 2.6 2.6) (layers "B.Cu" "B.Paste" "B.Mask") (tstamp a29f8df0-3fae-4edf-8d9c-bd5a875b13e3))
  (pad "1" smd rect (at -5.875 5.75) (size 2.6 2.6) (layers "B.Cu" "B.Paste" "B.Mask") (tstamp ab6912fc-e86a-4658-a0be-ebe6f39032e6))
  (pad "2" smd rect (at 5.875 5.75) (size 2.6 2.6) (layers "B.Cu" "B.Paste" "B.Mask") (tstamp 6e435cd4-da2b-4602-a0aa-5dd988834dff))
  (pad "2" smd rect (at 7.675 4.7) (size 2.6 2.6) (layers "B.Cu" "B.Paste" "B.Mask") (tstamp bc008311-edc2-4fdd-abae-473b50c89a0a))
)
*/
