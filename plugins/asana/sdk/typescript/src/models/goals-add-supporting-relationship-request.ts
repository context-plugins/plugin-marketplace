import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  goalAddSupportingRelationshipRequestSchema,
  type GoalAddSupportingRelationshipRequest,
} from "./goal-add-supporting-relationship-request.js";

export type GoalsAddSupportingRelationshipRequest = {
  data?: GoalAddSupportingRelationshipRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const goalsAddSupportingRelationshipRequestSchema: Schema<GoalsAddSupportingRelationshipRequest> =
  s.object<GoalsAddSupportingRelationshipRequest>(
    {
      data: s.optional(s.lazy(() => goalAddSupportingRelationshipRequestSchema)),
    },
    { additionalProperties: s.json() },
  );
