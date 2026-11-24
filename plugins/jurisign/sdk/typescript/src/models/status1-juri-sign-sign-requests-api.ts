import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status1JuriSignSignRequestsApi = {
  Pending: "pending",
  Processing: "processing",
  Paid: "paid",
  Failed: "failed",
  Canceled: "canceled",
  Expired: "expired",
} as const;
export type Status1JuriSignSignRequestsApi =
  | (typeof Status1JuriSignSignRequestsApi)[keyof typeof Status1JuriSignSignRequestsApi]
  | (string & {});

export const status1JuriSignSignRequestsApiSchema: EnumSchema<Status1JuriSignSignRequestsApi> =
  s.enumOf<Status1JuriSignSignRequestsApi>(Status1JuriSignSignRequestsApi);
