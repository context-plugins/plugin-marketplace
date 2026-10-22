import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Filters3 = {
  Page: "page",
  Limit: "limit",
  Search: "search",
  Shared: "shared",
  Tags: "tags",
  MinMessages: "minMessages",
  SortBy: "sortBy",
  SortOrder: "sortOrder",
  StartDate: "startDate",
  EndDate: "endDate",
  MessageType: "messageType",
  DateRange: "dateRange",
} as const;
export type Filters3 = (typeof Filters3)[keyof typeof Filters3] | (string & {});

export const filters3Schema: EnumSchema<Filters3> = s.enumOf<Filters3>(Filters3);
