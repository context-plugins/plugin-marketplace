import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The contract status. */
export const Status1DoiTContractsApi = {
  Draft: "draft",
  Scheduled: "scheduled",
  Active: "active",
  Cancelled: "cancelled",
  Expired: "expired",
  Superseded: "superseded",
} as const;
export type Status1DoiTContractsApi =
  | (typeof Status1DoiTContractsApi)[keyof typeof Status1DoiTContractsApi]
  | (string & {});

export const status1DoiTContractsApiSchema: EnumSchema<Status1DoiTContractsApi> =
  s.enumOf<Status1DoiTContractsApi>(Status1DoiTContractsApi);
