import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { stack1Schema, type Stack1 } from "./stack1.js";

/** Fields to update on the stack. */
export type UpdateStackRequest = {
  stack?: Stack1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateStackRequestSchema: Schema<UpdateStackRequest> = s.object<UpdateStackRequest>(
  {
    stack: s.optional(s.lazy(() => stack1Schema)),
  },
  { additionalProperties: s.json() },
);
