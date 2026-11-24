import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { codeSchema, type Code } from "./code.js";
import { sourceSchema, type Source } from "./source.js";

export type Data1ReportingReportsApi = {
  /** Application-specific error code, expressed as a string value. */
  code: Code;
  /** Human-readable explanation specific to this occurrence of the problem. */
  detail?: string;
  /** An object containing references to the source of the error. */
  source?: Source;
  /** Title of the error */
  title?: string;
  /** Type of the response, always "error" */
  type: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const data1ReportingReportsApiSchema: Schema<Data1ReportingReportsApi> =
  s.object<Data1ReportingReportsApi>(
    {
      code: codeSchema,
      detail: s.optional(s.string()),
      source: s.optional(s.lazy(() => sourceSchema)),
      title: s.optional(s.string()),
      type: s.string(),
    },
    { additionalProperties: s.json() },
  );
