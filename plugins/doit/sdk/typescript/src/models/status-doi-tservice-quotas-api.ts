import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Normalized utilization status. Warning begins at 80 percent; exceeded begins at 100 percent. */
export const StatusDoiTServiceQuotasApi = {
  Ok: "ok",
  Warning: "warning",
  Exceeded: "exceeded",
} as const;
export type StatusDoiTServiceQuotasApi =
  | (typeof StatusDoiTServiceQuotasApi)[keyof typeof StatusDoiTServiceQuotasApi]
  | (string & {});

export const statusDoiTServiceQuotasApiSchema: EnumSchema<StatusDoiTServiceQuotasApi> =
  s.enumOf<StatusDoiTServiceQuotasApi>(StatusDoiTServiceQuotasApi);
