import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { goalRelationshipRequestSchema, type GoalRelationshipRequest } from "./goal-relationship-request.js";

export type GoalRelationshipsRequest = {
  data?: GoalRelationshipRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const goalRelationshipsRequestSchema: Schema<GoalRelationshipsRequest> =
  s.object<GoalRelationshipsRequest>(
    {
      data: s.optional(s.lazy(() => goalRelationshipRequestSchema)),
    },
    { additionalProperties: s.json() },
  );
