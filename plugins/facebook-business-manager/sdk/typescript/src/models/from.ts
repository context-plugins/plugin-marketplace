import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The person or Page that made the comment */
export type From = {
  id?: string;
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fromSchema: Schema<From> = s.object<From>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
