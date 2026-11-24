import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current status of the number */
export const StatusDidlogicComNumbersInventoryApi = {
  Active: "active",
  PendingDocs: "pending_docs",
} as const;
export type StatusDidlogicComNumbersInventoryApi =
  | (typeof StatusDidlogicComNumbersInventoryApi)[keyof typeof StatusDidlogicComNumbersInventoryApi]
  | (string & {});

export const statusDidlogicComNumbersInventoryApiSchema: EnumSchema<StatusDidlogicComNumbersInventoryApi> =
  s.enumOf<StatusDidlogicComNumbersInventoryApi>(StatusDidlogicComNumbersInventoryApi);
