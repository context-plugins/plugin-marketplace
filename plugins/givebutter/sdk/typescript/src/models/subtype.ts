import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Subtype = {
  Physical: "physical",
  Digital: "digital",
  Hybrid: "hybrid",
} as const;
export type Subtype = (typeof Subtype)[keyof typeof Subtype] | (string & {});

export const subtypeSchema: EnumSchema<Subtype> = s.enumOf<Subtype>(Subtype);
