import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Context = {
  file: string | null;
  excerpt: string;
  contextFromVersion: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contextSchema: Schema<Context> = s.object<Context>(
  {
    file: s.nullable(s.string()),
    excerpt: s.string(),
    contextFromVersion: s.nullable(s.float64()),
  },
  { additionalProperties: s.json() },
);
