import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SortByDoiTCommitmentManagerApi = {
  Name: "name",
  StartDate: "startDate",
  EndDate: "endDate",
  Provider: "provider",
  CreateTime: "createTime",
  UpdateTime: "updateTime",
} as const;
export type SortByDoiTCommitmentManagerApi =
  | (typeof SortByDoiTCommitmentManagerApi)[keyof typeof SortByDoiTCommitmentManagerApi]
  | (string & {});

export const sortByDoiTCommitmentManagerApiSchema: EnumSchema<SortByDoiTCommitmentManagerApi> =
  s.enumOf<SortByDoiTCommitmentManagerApi>(SortByDoiTCommitmentManagerApi);
