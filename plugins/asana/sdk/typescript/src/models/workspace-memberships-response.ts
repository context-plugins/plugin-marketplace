import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  workspaceMembershipResponseSchema,
  type WorkspaceMembershipResponse,
} from "./workspace-membership-response.js";

export type WorkspaceMembershipsResponse = {
  data?: WorkspaceMembershipResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workspaceMembershipsResponseSchema: Schema<WorkspaceMembershipsResponse> =
  s.object<WorkspaceMembershipsResponse>(
    {
      data: s.optional(s.lazy(() => workspaceMembershipResponseSchema)),
    },
    { additionalProperties: s.json() },
  );
