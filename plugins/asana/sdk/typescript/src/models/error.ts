import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Error = {
  /** Message providing more detail about the error that occurred, if available. */
  message?: string;
  /**
   * Additional information directing developers to resources on how to address and fix the problem,
   * if available.
   */
  help?: string;
  /**
   * *500 errors only*. A unique error phrase which can be used when contacting developer support to
   * help identify the exact occurrence of the problem in Asana’s logs.
   */
  phrase?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorSchema: Schema<Error> = s.object<Error>(
  {
    message: s.optional(s.string()),
    help: s.optional(s.string()),
    phrase: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
