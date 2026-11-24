import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ResultSaplingGenerationApi = {
  Success: "success",
} as const;
export type ResultSaplingGenerationApi =
  | (typeof ResultSaplingGenerationApi)[keyof typeof ResultSaplingGenerationApi]
  | (string & {});

export const resultSaplingGenerationApiSchema: EnumSchema<ResultSaplingGenerationApi> =
  s.enumOf<ResultSaplingGenerationApi>(ResultSaplingGenerationApi);
