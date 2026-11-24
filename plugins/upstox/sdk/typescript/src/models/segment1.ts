import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Segment1 = {
  Sec: "SEC",
  Com: "COM",
} as const;
export type Segment1 = (typeof Segment1)[keyof typeof Segment1] | (string & {});

export const segment1Schema: EnumSchema<Segment1> = s.enumOf<Segment1>(Segment1);
