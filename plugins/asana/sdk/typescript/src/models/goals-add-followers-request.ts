import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskAddFollowersRequestSchema, type TaskAddFollowersRequest } from "./task-add-followers-request.js";

export type GoalsAddFollowersRequest = {
  data?: TaskAddFollowersRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const goalsAddFollowersRequestSchema: Schema<GoalsAddFollowersRequest> =
  s.object<GoalsAddFollowersRequest>(
    {
      data: s.optional(s.lazy(() => taskAddFollowersRequestSchema)),
    },
    { additionalProperties: s.json() },
  );
