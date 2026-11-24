import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type KeyEntity = {
  name?: string;
  type?: string;
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const keyEntitySchema: Schema<KeyEntity> = s.object<KeyEntity>(
  {
    name: s.optional(s.string()),
    type: s.optional(s.string()),
    description: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
