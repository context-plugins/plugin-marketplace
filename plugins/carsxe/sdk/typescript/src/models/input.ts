import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Input = {
  plate?: string;
  state?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const inputSchema: Schema<Input> = s.object<Input>(
  {
    plate: s.optional(s.string()),
    state: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
