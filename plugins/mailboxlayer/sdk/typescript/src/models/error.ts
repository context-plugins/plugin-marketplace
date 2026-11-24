import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Error = {
  /** Numeric error code as defined in Mailboxlayer docs. */
  code: number;
  /** Short machine-readable error type. */
  type: string;
  /** Human-readable info / suggestion for correcting the request. */
  info: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorSchema: Schema<Error> = s.object<Error>(
  {
    code: s.int(),
    type: s.string(),
    info: s.string(),
  },
  { additionalProperties: s.json() },
);
