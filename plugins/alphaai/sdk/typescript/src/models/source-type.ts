import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SourceType = {
  Gdelt: "gdelt",
  SecForm4: "sec_form4",
  SecForm8K: "sec_form8k",
  SecForm6K: "sec_form6k",
} as const;
export type SourceType = (typeof SourceType)[keyof typeof SourceType] | (string & {});

export const sourceTypeSchema: EnumSchema<SourceType> = s.enumOf<SourceType>(SourceType);
