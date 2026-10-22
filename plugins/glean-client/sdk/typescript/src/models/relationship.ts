import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The team member's relationship to the team. This defaults to MEMBER if not set. */
export const Relationship = {
  Member: "MEMBER",
  Manager: "MANAGER",
  Lead: "LEAD",
  PointOfContact: "POINT_OF_CONTACT",
  Other: "OTHER",
} as const;
export type Relationship = (typeof Relationship)[keyof typeof Relationship] | (string & {});

export const relationshipSchema: EnumSchema<Relationship> = s.enumOf<Relationship>(Relationship);
