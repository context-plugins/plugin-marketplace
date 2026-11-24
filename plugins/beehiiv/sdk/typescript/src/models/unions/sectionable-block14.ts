import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { sectionableBlockSchema, type SectionableBlock } from "../sectionable-block.js";
import { sectionableBlock1Schema, type SectionableBlock1 } from "../sectionable-block1.js";
import { sectionableBlock10Schema, type SectionableBlock10 } from "../sectionable-block10.js";
import { sectionableBlock11Schema, type SectionableBlock11 } from "../sectionable-block11.js";
import { sectionableBlock12Schema, type SectionableBlock12 } from "../sectionable-block12.js";
import { sectionableBlock13Schema, type SectionableBlock13 } from "../sectionable-block13.js";
import { sectionableBlock2Schema, type SectionableBlock2 } from "../sectionable-block2.js";
import { sectionableBlock3Schema, type SectionableBlock3 } from "../sectionable-block3.js";
import { sectionableBlock4Schema, type SectionableBlock4 } from "../sectionable-block4.js";
import { sectionableBlock5Schema, type SectionableBlock5 } from "../sectionable-block5.js";
import { sectionableBlock6Schema, type SectionableBlock6 } from "../sectionable-block6.js";
import { sectionableBlock7Schema, type SectionableBlock7 } from "../sectionable-block7.js";
import { sectionableBlock8Schema, type SectionableBlock8 } from "../sectionable-block8.js";
import { sectionableBlock9Schema, type SectionableBlock9 } from "../sectionable-block9.js";

/**
 * A block that can appear inside a section. Excludes `section` and `columns` (TipTap's schema does
 * not allow nested sections).
 */
export type SectionableBlock14 =
  | SectionableBlock
  | SectionableBlock1
  | SectionableBlock2
  | SectionableBlock3
  | SectionableBlock4
  | SectionableBlock5
  | SectionableBlock6
  | SectionableBlock7
  | SectionableBlock8
  | SectionableBlock9
  | SectionableBlock10
  | SectionableBlock11
  | SectionableBlock12
  | SectionableBlock13;

export const sectionableBlock14Schema: Schema<SectionableBlock14> = s.of<SectionableBlock14>(
  s.union([
    s.lazy(() => sectionableBlockSchema),
    s.lazy(() => sectionableBlock1Schema),
    s.lazy(() => sectionableBlock2Schema),
    s.lazy(() => sectionableBlock3Schema),
    s.lazy(() => sectionableBlock4Schema),
    s.lazy(() => sectionableBlock5Schema),
    s.lazy(() => sectionableBlock6Schema),
    s.lazy(() => sectionableBlock7Schema),
    s.lazy(() => sectionableBlock8Schema),
    s.lazy(() => sectionableBlock9Schema),
    s.lazy(() => sectionableBlock10Schema),
    s.lazy(() => sectionableBlock11Schema),
    s.lazy(() => sectionableBlock12Schema),
    s.lazy(() => sectionableBlock13Schema),
  ]),
);
