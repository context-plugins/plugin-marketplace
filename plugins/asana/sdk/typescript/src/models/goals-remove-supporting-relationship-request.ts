import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  goalRemoveSupportingRelationshipRequestSchema,
  type GoalRemoveSupportingRelationshipRequest,
} from "./goal-remove-supporting-relationship-request.js";

export type GoalsRemoveSupportingRelationshipRequest = {
  data?: GoalRemoveSupportingRelationshipRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const goalsRemoveSupportingRelationshipRequestSchema: Schema<GoalsRemoveSupportingRelationshipRequest> =
  s.object<GoalsRemoveSupportingRelationshipRequest>(
    {
      data: s.optional(s.lazy(() => goalRemoveSupportingRelationshipRequestSchema)),
    },
    { additionalProperties: s.json() },
  );
