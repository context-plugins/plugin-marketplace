import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Categories a Collection can be pinned to. */
export const CollectionPinnableCategories = {
  CompanyResource: "COMPANY_RESOURCE",
  DepartmentResource: "DEPARTMENT_RESOURCE",
  TeamResource: "TEAM_RESOURCE",
} as const;
export type CollectionPinnableCategories =
  | (typeof CollectionPinnableCategories)[keyof typeof CollectionPinnableCategories]
  | (string & {});

export const collectionPinnableCategoriesSchema: EnumSchema<CollectionPinnableCategories> =
  s.enumOf<CollectionPinnableCategories>(CollectionPinnableCategories);
