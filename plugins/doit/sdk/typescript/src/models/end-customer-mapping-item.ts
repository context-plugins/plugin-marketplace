import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EndCustomerMappingItem = {
  /** 12-digit AWS account ID of the end-customer account being mapped. */
  ecAccountId: string;
  /** DoiT customer ID to map the end-customer account to. */
  ecCustomerId: string;
  /** Optional CUR export base path for the end-customer account. */
  curBasePath?: string;
};

export const endCustomerMappingItemSchema: Schema<EndCustomerMappingItem> = s.object<EndCustomerMappingItem>({
  ecAccountId: s.string(),
  ecCustomerId: s.string(),
  curBasePath: s.optional(s.string()),
});
