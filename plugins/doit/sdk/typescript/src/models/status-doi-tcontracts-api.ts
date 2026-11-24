import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The contract status after the operation (`active`, `scheduled`, or `cancelled`). */
export const StatusDoiTContractsApi = {
  Active: "active",
  Scheduled: "scheduled",
  Cancelled: "cancelled",
} as const;
export type StatusDoiTContractsApi =
  | (typeof StatusDoiTContractsApi)[keyof typeof StatusDoiTContractsApi]
  | (string & {});

export const statusDoiTContractsApiSchema: EnumSchema<StatusDoiTContractsApi> =
  s.enumOf<StatusDoiTContractsApi>(StatusDoiTContractsApi);
