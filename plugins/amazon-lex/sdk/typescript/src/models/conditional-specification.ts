import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { conditionalBranchSchema, type ConditionalBranch } from "./conditional-branch.js";
import {
  defaultConditionalBranchSchema,
  type DefaultConditionalBranch,
} from "./default-conditional-branch.js";

export type ConditionalSpecification = {
  /**
   * Determines whether a conditional branch is active. When active is false, the conditions are not
   * evaluated.
   */
  active: boolean;
  /**
   * A list of conditional branches. A conditional branch is made up of a condition, a response and
   * a next step. The response and next step are executed when the condition is true.
   */
  conditionalBranches: ConditionalBranch[];
  defaultBranch: DefaultConditionalBranch;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const conditionalSpecificationSchema: Schema<ConditionalSpecification> =
  s.object<ConditionalSpecification>(
    {
      active: s.boolean(),
      conditionalBranches: s.array(s.lazy(() => conditionalBranchSchema)),
      defaultBranch: defaultConditionalBranchSchema,
    },
    { additionalProperties: s.json() },
  );
