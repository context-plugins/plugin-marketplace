import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Right/remote document state */
export type Right = {
  n?: number;
  h?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rightSchema: Schema<Right> = s.object<Right>(
  {
    n: s.optional(s.int()),
    h: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
