import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A specific server error */
export type JsonSingleError = {
  /** A unique numeric code representing the error */
  code?: number;
  /** A unique string code representing the error */
  codeName?: string;
  /** Human readable description of the error */
  message?: string;
  /** Human readable description of the error, localized */
  localizedMessage?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const jsonSingleErrorSchema: Schema<JsonSingleError> = s.object<JsonSingleError>(
  {
    code: s.optional(s.int()),
    codeName: s.optional(s.string()),
    message: s.optional(s.string()),
    localizedMessage: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
