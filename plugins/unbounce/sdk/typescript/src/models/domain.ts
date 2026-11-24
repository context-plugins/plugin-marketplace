import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Domain = {
  id?: string;
  name?: string;
  state?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const domainSchema: Schema<Domain> = s.object<Domain>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    state: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
