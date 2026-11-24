import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { stack2Schema, type Stack2 } from "./stack2.js";

/** Parameters for creating a new stack. */
export type CreateStackRequest = {
  stack: Stack2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createStackRequestSchema: Schema<CreateStackRequest> = s.object<CreateStackRequest>(
  {
    stack: stack2Schema,
  },
  { additionalProperties: s.json() },
);
