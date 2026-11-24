import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { conditionSchema, type Condition } from "./condition.js";
import { dialogStateSchema, type DialogState } from "./dialog-state.js";
import { responseSpecificationSchema, type ResponseSpecification } from "./response-specification.js";

export type ConditionalBranch = {
  /** The name of the branch. */
  name: string;
  condition: Condition;
  nextStep: DialogState;
  response?: ResponseSpecification;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const conditionalBranchSchema: Schema<ConditionalBranch> = s.object<ConditionalBranch>(
  {
    name: s.string(),
    condition: conditionSchema,
    nextStep: dialogStateSchema,
    response: s.optional(s.lazy(() => responseSpecificationSchema)),
  },
  { additionalProperties: s.json() },
);
