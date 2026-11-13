import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Most recent common ancestor state */
export type Parent = {
  n?: number;
  h?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const parentSchema: Schema<Parent> = s.object<Parent>(
  {
    n: s.optional(s.int()),
    h: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
