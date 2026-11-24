import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Links4 = {
  self?: string;
  next?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const links4Schema: Schema<Links4> = s.object<Links4>(
  {
    self: s.optional(s.string()),
    next: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
