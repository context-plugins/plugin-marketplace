import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { codeSchema, type Code } from "./code.js";

/** A condition that is part of the trigger state computation. */
export type StateCondition = {
  /** Human-readable message. */
  message?: string;
  /** The canonical code of the condition. */
  code?: Code;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stateConditionSchema: Schema<StateCondition> = s.object<StateCondition>(
  {
    message: s.optional(s.string()),
    code: s.optional(s.lazy(() => codeSchema)),
  },
  { additionalProperties: s.json() },
);
