import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Hidden Default Breakers */
export const HiddenDefaultBreakers = {
  Cribl: "Cribl",
} as const;
export type HiddenDefaultBreakers =
  | (typeof HiddenDefaultBreakers)[keyof typeof HiddenDefaultBreakers]
  | (string & {});

export const hiddenDefaultBreakersSchema: EnumSchema<HiddenDefaultBreakers> =
  s.enumOf<HiddenDefaultBreakers>(HiddenDefaultBreakers);
