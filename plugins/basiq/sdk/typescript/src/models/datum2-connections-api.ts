import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { code1Schema, type Code1 } from "./code1.js";
import { sourceSchema, type Source } from "./source.js";

export type Datum2ConnectionsApi = {
  /** Application-specific error code, expressed as a string value. */
  code: Code1;
  /** Human-readable explanation specific to this occurrence of the problem. */
  detail?: string;
  /** An object containing references to the source of the error. */
  source: Source;
  /** Title of the error */
  title?: string;
  /** Type of the response, always "error" */
  type: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datum2ConnectionsApiSchema: Schema<Datum2ConnectionsApi> = s.object<Datum2ConnectionsApi>(
  {
    code: code1Schema,
    detail: s.optional(s.string()),
    source: sourceSchema,
    title: s.optional(s.string()),
    type: s.string(),
  },
  { additionalProperties: s.json() },
);
