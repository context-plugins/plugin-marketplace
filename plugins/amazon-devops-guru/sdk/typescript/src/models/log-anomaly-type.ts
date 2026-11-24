import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of log anomaly that has been detected. */
export const LogAnomalyType = {
  Keyword: "KEYWORD",
  KeywordToken: "KEYWORD_TOKEN",
  Format: "FORMAT",
  HttpCode: "HTTP_CODE",
  BlockFormat: "BLOCK_FORMAT",
  NumericalPoint: "NUMERICAL_POINT",
  NumericalNan: "NUMERICAL_NAN",
  NewFieldName: "NEW_FIELD_NAME",
} as const;
export type LogAnomalyType = (typeof LogAnomalyType)[keyof typeof LogAnomalyType] | (string & {});

export const logAnomalyTypeSchema: EnumSchema<LogAnomalyType> = s.enumOf<LogAnomalyType>(LogAnomalyType);
