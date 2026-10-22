import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Different ways of sorting entities */
export const EntitiesSortOrder = {
  EntityName: "ENTITY_NAME",
  FirstName: "FIRST_NAME",
  LastName: "LAST_NAME",
  OrgSizeCount: "ORG_SIZE_COUNT",
  StartDate: "START_DATE",
  TeamSize: "TEAM_SIZE",
  Relevance: "RELEVANCE",
} as const;
export type EntitiesSortOrder = (typeof EntitiesSortOrder)[keyof typeof EntitiesSortOrder] | (string & {});

export const entitiesSortOrderSchema: EnumSchema<EntitiesSortOrder> =
  s.enumOf<EntitiesSortOrder>(EntitiesSortOrder);
