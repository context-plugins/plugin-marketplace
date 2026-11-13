import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Body40 = {
  /**
   * Workspace invite code to join with. Provide either `invite_code` or `workspace_id`, not both.
   */
  inviteCode?: string | null;
  /**
   * Workspace ID to join by verified email domain. Provide either `invite_code` or `workspace_id`,
   * not both.
   */
  workspaceId?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const body40Schema: Schema<Body40> = s.object<Body40>(
  {
    inviteCode: s.optionalNullable(s.string()),
    workspaceId: s.optionalNullable(s.int()),
    _keysMap: {
      inviteCode: "invite_code",
      workspaceId: "workspace_id",
    },
  },
  { additionalProperties: s.json() },
);
