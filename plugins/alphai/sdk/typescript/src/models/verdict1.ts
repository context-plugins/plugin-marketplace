import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Verdict1 = {
  Above: "above",
  InLine: "in line",
  Below: "below",
  Na: "n/a",
} as const;
export type Verdict1 = (typeof Verdict1)[keyof typeof Verdict1] | (string & {});

export const verdict1Schema: EnumSchema<Verdict1> = s.enumOf<Verdict1>(Verdict1);
