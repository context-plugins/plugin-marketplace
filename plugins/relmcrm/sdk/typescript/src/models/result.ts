import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Result = {
  type?: string;
  id?: string;
  title?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resultSchema: Schema<Result> = s.object<Result>(
  {
    type: s.optional(s.string()),
    id: s.optional(s.string()),
    title: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
