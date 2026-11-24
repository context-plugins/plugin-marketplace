import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Subdivision = {
  code?: string;
  title?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subdivisionSchema: Schema<Subdivision> = s.object<Subdivision>(
  {
    code: s.optional(s.string()),
    title: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
