import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusDeliverdDevReportsApi = {
  Active: "active",
  Archived: "archived",
  Blocked: "blocked",
} as const;
export type StatusDeliverdDevReportsApi =
  | (typeof StatusDeliverdDevReportsApi)[keyof typeof StatusDeliverdDevReportsApi]
  | (string & {});

export const statusDeliverdDevReportsApiSchema: EnumSchema<StatusDeliverdDevReportsApi> =
  s.enumOf<StatusDeliverdDevReportsApi>(StatusDeliverdDevReportsApi);
