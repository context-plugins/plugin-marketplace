import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const BulkStatus = {
  Completed: "COMPLETED",
  InsufficientCredits: "INSUFFICIENT_CREDITS",
  InternalError: "INTERNAL_ERROR",
} as const;
export type BulkStatus = (typeof BulkStatus)[keyof typeof BulkStatus] | (string & {});

export const bulkStatusSchema: EnumSchema<BulkStatus> = s.enumOf<BulkStatus>(BulkStatus);
