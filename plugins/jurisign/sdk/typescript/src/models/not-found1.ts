import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type NotFound1 = {
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const notFound1Schema: Schema<NotFound1> = s.object<NotFound1>(
  {
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
