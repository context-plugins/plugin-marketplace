import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the label (custom or preset). */
export const TypeDoiTLabelsApi = {
  Custom: "custom",
  Preset: "preset",
} as const;
export type TypeDoiTLabelsApi = (typeof TypeDoiTLabelsApi)[keyof typeof TypeDoiTLabelsApi] | (string & {});

export const typeDoiTLabelsApiSchema: EnumSchema<TypeDoiTLabelsApi> =
  s.enumOf<TypeDoiTLabelsApi>(TypeDoiTLabelsApi);
