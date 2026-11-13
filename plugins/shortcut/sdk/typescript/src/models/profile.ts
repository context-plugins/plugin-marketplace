import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { iconSchema, type Icon } from "./icon.js";

/** A group of Member profile details. */
export type Profile = {
  /** A string description of this resource. */
  entityType: string;
  /** A true/false boolean indicating whether the Member has been deactivated within Shortcut. */
  deactivated: boolean;
  /** If Two Factor Authentication is activated for this User. */
  twoFactorAuthActivated?: boolean;
  /** The Member's username within the Organization. */
  mentionName: string;
  /** For an Agent: whether it may be \@-mentioned in comments and descriptions. */
  isMentionable?: boolean;
  /** The Member's name within the Organization. */
  name: string | null;
  /** Whether this profile is an Agent/Bot user. */
  isAgent?: boolean;
  /** This is the gravatar hash associated with email_address. */
  gravatarHash: string | null;
  /** The unique identifier of the profile. */
  id: string;
  /**
   * Icons are used to attach images to Groups, Workspaces, Members, and Loading screens in the
   * Shortcut web application.
   */
  displayIcon: Icon;
  /** A boolean indicating whether this profile is an owner at their associated organization. */
  isOwner: boolean;
  /** For an Agent: whether it may be set as an owner on Stories and Epics. */
  isAssignable?: boolean;
  /** The primary email address of the Member with the Organization. */
  emailAddress: string | null;
};

export const profileSchema: Schema<Profile> = s.object<Profile>({
  entityType: s.string(),
  deactivated: s.boolean(),
  twoFactorAuthActivated: s.optional(s.boolean()),
  mentionName: s.string(),
  isMentionable: s.optional(s.boolean()),
  name: s.nullable(s.string()),
  isAgent: s.optional(s.boolean()),
  gravatarHash: s.nullable(s.string()),
  id: s.string(),
  displayIcon: iconSchema,
  isOwner: s.boolean(),
  isAssignable: s.optional(s.boolean()),
  emailAddress: s.nullable(s.string()),
  _keysMap: {
    entityType: "entity_type",
    twoFactorAuthActivated: "two_factor_auth_activated",
    mentionName: "mention_name",
    isMentionable: "is_mentionable",
    isAgent: "is_agent",
    gravatarHash: "gravatar_hash",
    displayIcon: "display_icon",
    isOwner: "is_owner",
    isAssignable: "is_assignable",
    emailAddress: "email_address",
  },
});
