import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { profileSchema, type Profile } from "./profile.js";
import { state3Schema, type State3 } from "./state3.js";

/** Details about an individual user within the Workspace. */
export type Member = {
  /** The Member's role in the Workspace. */
  role: string;
  /** A string description of this resource. */
  entityType: string;
  /** True/false boolean indicating whether the Member has been disabled within the Workspace. */
  disabled: boolean;
  globalId: string;
  /**
   * The user state, one of partial, full, disabled, or imported. A partial user is disabled, has no
   * means to log in, and is not an import user. A full user is enabled and has a means to log in. A
   * disabled user is disabled and has a means to log in. An import user is disabled, has no means
   * to log in, and is marked as an import user.
   */
  state: State3;
  /** The time/date the Member was last updated. */
  updatedAt: Date | null;
  /** Whether this member was created as a placeholder entity. */
  createdWithoutInvite: boolean;
  /** The Member's group ids */
  groupIds: string[];
  /** The Member's ID in Shortcut. */
  id: string;
  /** Only set for agents. The installation id associated with this agent. */
  installationId?: string;
  /** A group of Member profile details. */
  profile: Profile;
  /** The time/date the Member was created. */
  createdAt: Date | null;
  /** The id of the member that replaces this one when merged. */
  replacedBy?: string;
};

export const memberSchema: Schema<Member> = s.object<Member>({
  role: s.string(),
  entityType: s.string(),
  disabled: s.boolean(),
  globalId: s.string(),
  state: state3Schema,
  updatedAt: s.nullable(s.dateTime()),
  createdWithoutInvite: s.boolean(),
  groupIds: s.array(s.string()),
  id: s.string(),
  installationId: s.optional(s.string()),
  profile: profileSchema,
  createdAt: s.nullable(s.dateTime()),
  replacedBy: s.optional(s.string()),
  _keysMap: {
    entityType: "entity_type",
    globalId: "global_id",
    updatedAt: "updated_at",
    createdWithoutInvite: "created_without_invite",
    groupIds: "group_ids",
    installationId: "installation_id",
    createdAt: "created_at",
    replacedBy: "replaced_by",
  },
});
