import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SessionAccessActiveResponse1 = {
  email?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sessionAccessActiveResponse1Schema: Schema<SessionAccessActiveResponse1> =
  s.object<SessionAccessActiveResponse1>(
    {
      email: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
