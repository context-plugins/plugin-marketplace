import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const UtteranceSource = {
  Provider: "provider",
  DerivedMin: "derived_min",
} as const;
export type UtteranceSource = (typeof UtteranceSource)[keyof typeof UtteranceSource] | (string & {});

export const utteranceSourceSchema: EnumSchema<UtteranceSource> = s.enumOf<UtteranceSource>(UtteranceSource);
