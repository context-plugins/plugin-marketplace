import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { memberViewSchema, type MemberView } from "./member-view.js";

export type UsersResponse = {
  /** Whether more results are available. */
  hasMore: boolean;
  /** Cursor for the next page of results. */
  nextCursor?: string;
  /** Workspace users in the current page. */
  workspaceUsers: MemberView[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersResponseSchema: Schema<UsersResponse> = s.object<UsersResponse>(
  {
    hasMore: s.boolean(),
    nextCursor: s.optional(s.string()),
    workspaceUsers: s.array(s.lazy(() => memberViewSchema)),
    _keysMap: {
      hasMore: "has_more",
      nextCursor: "next_cursor",
      workspaceUsers: "workspace_users",
    },
  },
  { additionalProperties: s.json() },
);
