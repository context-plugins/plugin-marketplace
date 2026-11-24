import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SortByDoiTAnnotationsApi = {
  Id: "id",
  Content: "content",
  Timestamp: "timestamp",
  TimeCreated: "timeCreated",
  TimeModified: "timeModified",
} as const;
export type SortByDoiTAnnotationsApi =
  | (typeof SortByDoiTAnnotationsApi)[keyof typeof SortByDoiTAnnotationsApi]
  | (string & {});

export const sortByDoiTAnnotationsApiSchema: EnumSchema<SortByDoiTAnnotationsApi> =
  s.enumOf<SortByDoiTAnnotationsApi>(SortByDoiTAnnotationsApi);
