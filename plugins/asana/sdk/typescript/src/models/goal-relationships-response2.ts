import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { goalRelationshipCompactSchema, type GoalRelationshipCompact } from "./goal-relationship-compact.js";

export type GoalRelationshipsResponse2 = {
  data?: GoalRelationshipCompact[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const goalRelationshipsResponse2Schema: Schema<GoalRelationshipsResponse2> =
  s.object<GoalRelationshipsResponse2>(
    {
      data: s.optional(s.array(s.lazy(() => goalRelationshipCompactSchema))),
    },
    { additionalProperties: s.json() },
  );
