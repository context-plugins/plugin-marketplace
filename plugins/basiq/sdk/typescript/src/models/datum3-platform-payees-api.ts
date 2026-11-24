import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { code2Schema, type Code2 } from "./code2.js";

export type Datum3PlatformPayeesApi = {
  /** Type of the response, always "error" */
  type: string;
  /** Title of the error */
  title?: string;
  /** Application-specific error code. */
  code: Code2;
  /** Human-readable explanation specific to this occurrence of the problem. */
  detail?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datum3PlatformPayeesApiSchema: Schema<Datum3PlatformPayeesApi> =
  s.object<Datum3PlatformPayeesApi>(
    {
      type: s.string(),
      title: s.optional(s.string()),
      code: code2Schema,
      detail: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
