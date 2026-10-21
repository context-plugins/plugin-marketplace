import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { personSchema, type Person } from "./person.js";
import { Relationship, relationshipSchema } from "./relationship.js";

/** Metadata about the relationship of a person to a team. */
export type PersonToTeamRelationship = {
  person: Person;
  /**
   * The team member's relationship to the team. This defaults to MEMBER if not set.
   *
   * @default Relationship.Member
   */
  relationship?: Relationship;
  /** Displayed name for the relationship if relationship is set to `OTHER`. */
  customRelationshipStr?: string;
  /** The team member's start date */
  joinDate?: Date;
};

export const personToTeamRelationshipSchema: Schema<PersonToTeamRelationship> =
  s.object<PersonToTeamRelationship>({
    person: personSchema,
    relationship: s.defaulted(relationshipSchema, Relationship.Member),
    customRelationshipStr: s.optional(s.string()),
    joinDate: s.optional(s.dateTime()),
  });
