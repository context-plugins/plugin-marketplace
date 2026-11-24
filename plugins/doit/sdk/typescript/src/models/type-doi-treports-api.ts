import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TypeDoiTReportsApi = {
  Custom: "custom",
  Preset: "preset",
} as const;
export type TypeDoiTReportsApi = (typeof TypeDoiTReportsApi)[keyof typeof TypeDoiTReportsApi] | (string & {});

export const typeDoiTReportsApiSchema: EnumSchema<TypeDoiTReportsApi> =
  s.enumOf<TypeDoiTReportsApi>(TypeDoiTReportsApi);
