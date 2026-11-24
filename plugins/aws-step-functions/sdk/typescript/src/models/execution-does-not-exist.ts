import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ExecutionDoesNotExist = {
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const executionDoesNotExistSchema: Schema<ExecutionDoesNotExist> = s.object<ExecutionDoesNotExist>(
  {
    message: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
