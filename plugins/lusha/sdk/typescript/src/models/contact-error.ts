import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ContactError = {
  /** The code of the contact error */
  code?: number;
  /** The name of the contact error */
  name?: string;
  /** The message of the contact error */
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contactErrorSchema: Schema<ContactError> = s.object<ContactError>(
  {
    code: s.optional(s.float64()),
    name: s.optional(s.string()),
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
