import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Status of the order. */
export const StatusTabbyApiReferencePaymentsApi = {
  New: "new",
  Processing: "processing",
  Complete: "complete",
  Refunded: "refunded",
  Canceled: "canceled",
  Unknown: "unknown",
} as const;
export type StatusTabbyApiReferencePaymentsApi =
  | (typeof StatusTabbyApiReferencePaymentsApi)[keyof typeof StatusTabbyApiReferencePaymentsApi]
  | (string & {});

export const statusTabbyApiReferencePaymentsApiSchema: EnumSchema<StatusTabbyApiReferencePaymentsApi> =
  s.enumOf<StatusTabbyApiReferencePaymentsApi>(StatusTabbyApiReferencePaymentsApi);
