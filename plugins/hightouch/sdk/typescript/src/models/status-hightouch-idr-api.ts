import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusHightouchIdrApi = {
  Queued: "QUEUED",
  Processing: "PROCESSING",
  Success: "SUCCESS",
  Failure: "FAILURE",
  Cancelled: "CANCELLED",
} as const;
export type StatusHightouchIdrApi =
  | (typeof StatusHightouchIdrApi)[keyof typeof StatusHightouchIdrApi]
  | (string & {});

export const statusHightouchIdrApiSchema: EnumSchema<StatusHightouchIdrApi> =
  s.enumOf<StatusHightouchIdrApi>(StatusHightouchIdrApi);
