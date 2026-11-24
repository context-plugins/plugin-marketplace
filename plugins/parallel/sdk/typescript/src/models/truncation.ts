import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Truncation = {
  Auto: "auto",
  Disabled: "disabled",
} as const;
export type Truncation = (typeof Truncation)[keyof typeof Truncation] | (string & {});

export const truncationSchema: EnumSchema<Truncation> = s.enumOf<Truncation>(Truncation);
