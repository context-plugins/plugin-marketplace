import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Integration status. Reconnect for inactive; grant private-channel scopes for
 * missing_private_scope. None means no usable workspace was found; a shared channel may still be
 * available.
 */
export const WorkspaceStatus = {
  None: "none",
  Ok: "ok",
  Inactive: "inactive",
  MissingPrivateScope: "missing_private_scope",
} as const;
export type WorkspaceStatus = (typeof WorkspaceStatus)[keyof typeof WorkspaceStatus] | (string & {});

export const workspaceStatusSchema: EnumSchema<WorkspaceStatus> = s.enumOf<WorkspaceStatus>(WorkspaceStatus);
