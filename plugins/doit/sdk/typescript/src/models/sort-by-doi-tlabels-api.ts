import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SortByDoiTLabelsApi = {
  Id: "id",
  Name: "name",
  Type: "type",
  CreateTime: "createTime",
  UpdateTime: "updateTime",
} as const;
export type SortByDoiTLabelsApi =
  | (typeof SortByDoiTLabelsApi)[keyof typeof SortByDoiTLabelsApi]
  | (string & {});

export const sortByDoiTLabelsApiSchema: EnumSchema<SortByDoiTLabelsApi> =
  s.enumOf<SortByDoiTLabelsApi>(SortByDoiTLabelsApi);
