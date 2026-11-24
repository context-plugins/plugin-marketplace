import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { stackSchema, type Stack } from "./stack.js";

/** A list of stacks. */
export type StackList = {
  /** Array of stack objects. */
  stacks?: Stack[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const stackListSchema: Schema<StackList> = s.object<StackList>(
  {
    stacks: s.optional(s.array(s.lazy(() => stackSchema))),
  },
  { additionalProperties: s.json() },
);
