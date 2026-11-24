import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Verdict = {
  Strong: "strong",
  Solid: "solid",
  Mixed: "mixed",
  Weak: "weak",
} as const;
export type Verdict = (typeof Verdict)[keyof typeof Verdict] | (string & {});

export const verdictSchema: EnumSchema<Verdict> = s.enumOf<Verdict>(Verdict);
