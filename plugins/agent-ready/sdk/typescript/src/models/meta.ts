import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Meta = {
  version?: string;
  session?: string;
  user?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const metaSchema: Schema<Meta> = s.object<Meta>(
  {
    version: s.optional(s.string()),
    session: s.optional(s.string()),
    user: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
