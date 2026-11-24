import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  goalRelationshipResponseSchema,
  type GoalRelationshipResponse,
} from "./goal-relationship-response.js";

export type GoalsAddSupportingRelationshipResponse = {
  data?: GoalRelationshipResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const goalsAddSupportingRelationshipResponseSchema: Schema<GoalsAddSupportingRelationshipResponse> =
  s.object<GoalsAddSupportingRelationshipResponse>(
    {
      data: s.optional(s.lazy(() => goalRelationshipResponseSchema)),
    },
    { additionalProperties: s.json() },
  );
