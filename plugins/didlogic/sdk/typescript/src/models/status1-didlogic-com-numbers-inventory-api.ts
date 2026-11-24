import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Number status */
export const Status1DidlogicComNumbersInventoryApi = {
  Active: "active",
  PendingDocs: "pending_docs",
} as const;
export type Status1DidlogicComNumbersInventoryApi =
  | (typeof Status1DidlogicComNumbersInventoryApi)[keyof typeof Status1DidlogicComNumbersInventoryApi]
  | (string & {});

export const status1DidlogicComNumbersInventoryApiSchema: EnumSchema<Status1DidlogicComNumbersInventoryApi> =
  s.enumOf<Status1DidlogicComNumbersInventoryApi>(Status1DidlogicComNumbersInventoryApi);
