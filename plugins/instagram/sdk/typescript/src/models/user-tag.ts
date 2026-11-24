import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UserTag = {
  username?: string;
  x?: number;
  y?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const userTagSchema: Schema<UserTag> = s.object<UserTag>(
  {
    username: s.optional(s.string()),
    x: s.optional(s.float64()),
    y: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
