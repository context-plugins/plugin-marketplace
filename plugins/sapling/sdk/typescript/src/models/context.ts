import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Context = {
  completion: string;
  query: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contextSchema: Schema<Context> = s.object<Context>(
  {
    completion: s.string(),
    query: s.string(),
  },
  { additionalProperties: s.json() },
);
