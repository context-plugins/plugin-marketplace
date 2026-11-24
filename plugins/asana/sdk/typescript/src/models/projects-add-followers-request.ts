import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { addFollowersRequestSchema, type AddFollowersRequest } from "./add-followers-request.js";

export type ProjectsAddFollowersRequest = {
  data?: AddFollowersRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectsAddFollowersRequestSchema: Schema<ProjectsAddFollowersRequest> =
  s.object<ProjectsAddFollowersRequest>(
    {
      data: s.optional(s.lazy(() => addFollowersRequestSchema)),
    },
    { additionalProperties: s.json() },
  );
