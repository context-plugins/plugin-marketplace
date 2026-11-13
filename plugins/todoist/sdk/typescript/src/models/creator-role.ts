import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CreatorRole = {
  OwnerFounder: "owner_founder",
  Leader: "leader",
  IndividualContributor: "individual_contributor",
} as const;
export type CreatorRole = (typeof CreatorRole)[keyof typeof CreatorRole] | (string & {});

export const creatorRoleSchema: EnumSchema<CreatorRole> = s.enumOf<CreatorRole>(CreatorRole);
