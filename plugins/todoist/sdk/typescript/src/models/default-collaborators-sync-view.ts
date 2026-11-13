import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Client representation of default collaborators within a workspace. Split into 2 lists rather than
 * using the polymorphic original WorkspaceDefaultCollaboratorView.
 */
export type DefaultCollaboratorsSyncView = {
  /** IDs of the members added to every new project in the workspace. */
  userIds?: number[];
  /** Names of the predefined groups added to every new project in the workspace. */
  predefinedGroupIds?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const defaultCollaboratorsSyncViewSchema: Schema<DefaultCollaboratorsSyncView> =
  s.object<DefaultCollaboratorsSyncView>(
    {
      userIds: s.optional(s.array(s.int())),
      predefinedGroupIds: s.optional(s.array(s.string())),
      _keysMap: {
        userIds: "user_ids",
        predefinedGroupIds: "predefined_group_ids",
      },
    },
    { additionalProperties: s.json() },
  );
