import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  endCustomerMappingResultSchema,
  type EndCustomerMappingResult,
} from "./end-customer-mapping-result.js";
import { invalidHandshakeItemSchema, type InvalidHandshakeItem } from "./invalid-handshake-item.js";

export type EndCustomerMappingBatchResult = {
  dpmaId: string;
  resellerPmaAccountId: string;
  results: EndCustomerMappingResult[];
  /** Items rejected before processing. Omitted when every item passed validation. */
  invalidItems?: InvalidHandshakeItem[];
};

export const endCustomerMappingBatchResultSchema: Schema<EndCustomerMappingBatchResult> =
  s.object<EndCustomerMappingBatchResult>({
    dpmaId: s.string(),
    resellerPmaAccountId: s.string(),
    results: s.array(s.lazy(() => endCustomerMappingResultSchema)),
    invalidItems: s.optional(s.array(s.lazy(() => invalidHandshakeItemSchema))),
  });
