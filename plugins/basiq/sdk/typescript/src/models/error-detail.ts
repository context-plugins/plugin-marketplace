import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sourceInsightsApiSchema, type SourceInsightsApi } from "./source-insights-api.js";

export type ErrorDetail = {
  /** Type of data object @default "error" */
  type?: "error";
  /** Error code identifier */
  code: string;
  /** Human-readable error title */
  title: string;
  /** Detailed error message */
  detail: string;
  /** Source of the error (optional) */
  source?: SourceInsightsApi | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorDetailSchema: Schema<ErrorDetail> = s.object<ErrorDetail>(
  {
    type: s.defaulted(s.literal("error"), "error"),
    code: s.string(),
    title: s.string(),
    detail: s.string(),
    source: s.optionalNullable(s.lazy(() => sourceInsightsApiSchema)),
  },
  { additionalProperties: s.json() },
);
