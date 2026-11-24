import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Links2 = {
  /** A link to the current query. */
  self?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const links2Schema: Schema<Links2> = s.object<Links2>(
  {
    self: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
