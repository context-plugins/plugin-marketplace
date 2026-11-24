import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { userCompactSchema, type UserCompact } from "./user-compact.js";

export type WorkspacesUsersResponse = {
  data?: UserCompact[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workspacesUsersResponseSchema: Schema<WorkspacesUsersResponse> =
  s.object<WorkspacesUsersResponse>(
    {
      data: s.optional(s.array(s.lazy(() => userCompactSchema))),
    },
    { additionalProperties: s.json() },
  );
