import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RootCauseException = {
  /** The name of the exception. */
  name?: string;
  /** The message of the exception. */
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rootCauseExceptionSchema: Schema<RootCauseException> = s.object<RootCauseException>(
  {
    name: s.optional(s.string()),
    message: s.optional(s.string()),
    _keysMap: {
      name: "Name",
      message: "Message",
    },
  },
  { additionalProperties: s.json() },
);
