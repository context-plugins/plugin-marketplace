import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SortByDoiTAllocationsApi = {
  Id: "id",
  Name: "name",
  Owner: "owner",
  Description: "description",
  Type: "type",
  CreateTime: "createTime",
  UpdateTime: "updateTime",
} as const;
export type SortByDoiTAllocationsApi =
  | (typeof SortByDoiTAllocationsApi)[keyof typeof SortByDoiTAllocationsApi]
  | (string & {});

export const sortByDoiTAllocationsApiSchema: EnumSchema<SortByDoiTAllocationsApi> =
  s.enumOf<SortByDoiTAllocationsApi>(SortByDoiTAllocationsApi);
