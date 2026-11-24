import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { endCustomerMappingItemSchema, type EndCustomerMappingItem } from "./end-customer-mapping-item.js";

export type EndCustomerMappingBatchCreate = {
  dpmaId: string;
  /** 12-digit AWS account ID of the reseller's program management account. */
  resellerPmaAccountId: string;
  /**
   * Batch items. Duplicate `ecAccountId` or `ecCustomerId` values within the batch are rejected.
   */
  items: EndCustomerMappingItem[];
};

const endCustomerMappingBatchCreateProperties: s.Shape<EndCustomerMappingBatchCreate> = {
  dpmaId: s.string(),
  resellerPmaAccountId: s.string(),
  items: s.array(s.lazy(() => endCustomerMappingItemSchema)),
};

export const endCustomerMappingBatchCreateInternalSchema: Schema<EndCustomerMappingBatchCreate> =
  s.object<EndCustomerMappingBatchCreate>(endCustomerMappingBatchCreateProperties);

export const endCustomerMappingBatchCreateSchema: Schema<EndCustomerMappingBatchCreate> = s.lazySchema(() =>
  s.object<EndCustomerMappingBatchCreate>({
    ...endCustomerMappingBatchCreateProperties,
    items: s.array(s.lazy(() => endCustomerMappingItemSchema)).check(s.minLength(1), s.maxLength(100)),
  }),
);
