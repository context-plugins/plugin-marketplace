import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Relationship, relationshipSchema } from "./relationship.js";

/**
 * Use `id` if you index teams via Glean, and use `name` and `externalLink` if you want to use your
 * own team pages
 */
export type PersonTeam = {
  /** Unique identifier */
  id?: string;
  /** Team name */
  name?: string;
  /** Link to a team page on the internet or your company's intranet */
  externalLink?: string;
  /**
   * The team member's relationship to the team. This defaults to MEMBER if not set.
   *
   * @default Relationship.Member
   */
  relationship?: Relationship;
  /** The team member's start date */
  joinDate?: Date;
};

export const personTeamSchema: Schema<PersonTeam> = s.object<PersonTeam>({
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  externalLink: s.optional(s.string()),
  relationship: s.defaulted(relationshipSchema, Relationship.Member),
  joinDate: s.optional(s.dateTime()),
});
