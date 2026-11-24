import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V3ContactTag = {
  id?: string;
  name?: string;
  color?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v3ContactTagSchema: Schema<V3ContactTag> = s.object<V3ContactTag>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    color: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
