import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Links6 = {
  self?: string;
  event?: string;
  webhook?: string;
  next?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const links6Schema: Schema<Links6> = s.object<Links6>(
  {
    self: s.optional(s.string()),
    event: s.optional(s.string()),
    webhook: s.optional(s.string()),
    next: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
