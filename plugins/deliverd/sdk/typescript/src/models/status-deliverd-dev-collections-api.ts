import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusDeliverdDevCollectionsApi = {
  Pending: "pending",
  Complete: "complete",
  Expired: "expired",
  Cancelled: "cancelled",
} as const;
export type StatusDeliverdDevCollectionsApi =
  | (typeof StatusDeliverdDevCollectionsApi)[keyof typeof StatusDeliverdDevCollectionsApi]
  | (string & {});

export const statusDeliverdDevCollectionsApiSchema: EnumSchema<StatusDeliverdDevCollectionsApi> =
  s.enumOf<StatusDeliverdDevCollectionsApi>(StatusDeliverdDevCollectionsApi);
