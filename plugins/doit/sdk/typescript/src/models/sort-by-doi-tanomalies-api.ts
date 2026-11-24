import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SortByDoiTAnomaliesApi = {
  StartTime: "startTime",
  SeverityLevel: "severityLevel",
  CostOfAnomaly: "costOfAnomaly",
} as const;
export type SortByDoiTAnomaliesApi =
  | (typeof SortByDoiTAnomaliesApi)[keyof typeof SortByDoiTAnomaliesApi]
  | (string & {});

export const sortByDoiTAnomaliesApiSchema: EnumSchema<SortByDoiTAnomaliesApi> =
  s.enumOf<SortByDoiTAnomaliesApi>(SortByDoiTAnomaliesApi);
