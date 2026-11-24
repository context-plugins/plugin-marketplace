import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { codeSchema, type Code } from "./code.js";
import {
  source2ReportingReportsApiSchema,
  type Source2ReportingReportsApi,
} from "./source2-reporting-reports-api.js";

export type Data10 = {
  /** Type of the response, always "error" */
  type?: string;
  /** Title of the error */
  title?: string;
  /** Application-specific error code, expressed as a string value. */
  code?: Code;
  /** Human-readable explanation specific to this occurrence of the problem. */
  detail?: string;
  source?: Source2ReportingReportsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const data10Schema: Schema<Data10> = s.object<Data10>(
  {
    type: s.optional(s.string()),
    title: s.optional(s.string()),
    code: s.optional(s.lazy(() => codeSchema)),
    detail: s.optional(s.string()),
    source: s.optional(s.lazy(() => source2ReportingReportsApiSchema)),
  },
  { additionalProperties: s.json() },
);
