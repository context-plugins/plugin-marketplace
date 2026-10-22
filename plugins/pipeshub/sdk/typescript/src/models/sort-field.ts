import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SortField = {
  Name: "name",
  CreatedAtTimestamp: "createdAtTimestamp",
  UpdatedAtTimestamp: "updatedAtTimestamp",
  UserRole: "userRole",
} as const;
export type SortField = (typeof SortField)[keyof typeof SortField] | (string & {});

export const sortFieldSchema: EnumSchema<SortField> = s.enumOf<SortField>(SortField);
