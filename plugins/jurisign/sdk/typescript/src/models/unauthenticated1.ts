import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Unauthenticated1 = {
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const unauthenticated1Schema: Schema<Unauthenticated1> = s.object<Unauthenticated1>(
  {
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
