import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { code5Schema, type Code5 } from "./code5.js";

export type Datum1ConnectJobsApi = {
  /** Application-specific error code, expressed as a string value. */
  code: Code5;
  /** Human-readable explanation specific to this occurrence of the problem. */
  detail?: string;
  /** Title of the error */
  title?: string;
  /** Type of the response, always "error" */
  type: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datum1ConnectJobsApiSchema: Schema<Datum1ConnectJobsApi> = s.object<Datum1ConnectJobsApi>(
  {
    code: code5Schema,
    detail: s.optional(s.string()),
    title: s.optional(s.string()),
    type: s.string(),
  },
  { additionalProperties: s.json() },
);
