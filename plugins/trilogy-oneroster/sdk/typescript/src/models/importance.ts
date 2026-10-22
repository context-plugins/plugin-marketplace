import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Importance = {
  Primary: "primary",
  Secondary: "secondary",
} as const;
export type Importance = (typeof Importance)[keyof typeof Importance] | (string & {});

export const importanceSchema: EnumSchema<Importance> = s.enumOf<Importance>(Importance);
