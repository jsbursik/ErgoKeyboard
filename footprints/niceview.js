module.exports = {
  params: {
    designator: "OLED",
    side: "F",
    VCC: { type: "net", value: "VCC" },
    GND: { type: "net", value: "GND" },
    MOSI: undefined,
    SCK: undefined,
    CS: undefined,
  },
  body: (p) => `
  (module lib:niceview (layer F.Cu)
  ${p.at /* parametric position */}

  ${"" /* footprint reference */}        
  (fp_text reference "${p.ref}" (at 0 -17.27 ${p.rot}) (layer F.SilkS) ${p.ref_hide} (effects (font (size 1.27 1.27) (thickness 0.15))))
  (fp_text value "nice!view" (at 0 14.4 ${p.rot}) (layer F.Fab) (effects (font (size 1 1) (thickness 0.15))))
  
  ${"" /* display footprint */}
  (fp_rect (start -6.35 15.18) (end 6.35 17.78) (layer "F.SilkS") (width 0.12) (fill none))
  (fp_rect (start 7 17.78) (end -6.68 -18.22) (layer "Dwgs.User") (width 0.12) (fill none))
  (fp_rect (start 7 17.78) (end -6.68 -18.22) (layer "F.Fab") (width 0.12) (fill none))

  ${"" /* pins */}
  (pad 1 thru_hole circle (at -5.08 16.48 ${p.rot + 270}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) 
  ${p.MOSI.str})
  (pad 2 thru_hole circle (at -2.54 16.48 ${p.rot + 270}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask)
  ${p.SCK.str})
  (pad 3 thru_hole circle (at 0 16.48 ${p.rot + 270}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask)
  ${p.VCC.str})
  (pad 4 thru_hole circle (at 2.54 16.48 ${p.rot + 270}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) 
  ${p.GND.str})
  (pad 5 thru_hole circle (at 5.08 16.48 ${p.rot + 270}) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) 
  ${p.CS.str})
  )
  `,
};

/*
(footprint "nice_view" (version 20211014) (generator pcbnew)
  (layer "F.Cu")
  (tedit 63529BA6)
  (attr through_hole)
  (fp_text reference "display*" (at 0 1.27 unlocked) (layer "F.Fab")
    (effects (font (size 1 1) (thickness 0.15)))
    (tstamp 50fd1fca-4e30-48f4-b70b-eb7423f44c1a)
  )
  (fp_text value "nice!view" (at 0 21.59 unlocked) (layer "F.SilkS")
    (effects (font (size 1 1) (thickness 0.15)))
    (tstamp 08af2a1a-ed4e-4e90-8126-9bdb283f5291)
  )
  (fp_text user "CS" (at 5.08 17.78 90 unlocked) (layer "F.SilkS")
    (effects (font (size 1 1) (thickness 0.15)) (justify right))
    (tstamp 3a44593a-61a1-4844-8e94-2e0a78d992b8)
  )
  (fp_text user "MOSI" (at -5.08 17.78 90 unlocked) (layer "F.SilkS")
    (effects (font (size 1 1) (thickness 0.15)) (justify right))
    (tstamp 85f5ee76-2424-4e56-92b6-bfdae513ca4e)
  )
  (fp_text user "VCC" (at 0 17.78 90 unlocked) (layer "F.SilkS")
    (effects (font (size 1 1) (thickness 0.15)) (justify right))
    (tstamp 8cd2d001-99e7-4b10-adc2-c6385b5b4f06)
  )
  (fp_text user "GND" (at 2.54 17.78 90 unlocked) (layer "F.SilkS")
    (effects (font (size 1 1) (thickness 0.15)) (justify right))
    (tstamp dfeb1c63-167d-4f10-8d2f-ff5da7262dc4)
  )
  (fp_text user "SCK" (at -2.54 17.78 90 unlocked) (layer "F.SilkS")
    (effects (font (size 1 1) (thickness 0.15)) (justify right))
    (tstamp e61b5406-edfd-4a0f-ad9e-1438409ec09f)
  )
  (fp_text user "${REFERENCE}" (at 0 4 unlocked) (layer "F.Fab") hide
    (effects (font (size 1 1) (thickness 0.15)))
    (tstamp 71f3a4ec-dabf-4a7e-9e10-96005dfcffbd)
  )
  (fp_rect (start -6.35 15.18) (end 6.35 17.78) (layer "F.SilkS") (width 0.12) (fill none) (tstamp 159eb8a7-4c3b-4ceb-b858-e297d6d20206))
  (fp_rect (start 7 17.78) (end -6.68 -18.22) (layer "Dwgs.User") (width 0.12) (fill none) (tstamp 1c7ec62e-d96c-4a0d-ac32-e919b90a3c5b))
  (fp_rect (start 7 17.78) (end -6.68 -18.22) (layer "F.Fab") (width 0.12) (fill none) (tstamp 2b72eff6-9051-4a5d-b243-2a15bea93aa8))
  (pad "1" thru_hole circle (at -5.08 16.48) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) (tstamp ff228a40-4837-4a7d-ba37-3bb9778bec71))
  (pad "2" thru_hole circle (at -2.54 16.48) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) (tstamp e0a7cd59-be86-4b9e-a8a7-3e29f16e1798))
  (pad "3" thru_hole circle (at 0 16.48) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) (tstamp c3442737-2359-4a48-b741-8ea209de304f))
  (pad "4" thru_hole circle (at 2.54 16.48) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) (tstamp bd9f1839-8832-404f-b386-0c307218588d))
  (pad "5" thru_hole circle (at 5.08 16.48) (size 1.7526 1.7526) (drill 1.0922) (layers *.Cu *.Mask) (tstamp 87c474a5-4873-495a-91fd-0f0822e78602))
)
*/
