import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  entity1RazorpayDisputesApiSchema,
  type Entity1RazorpayDisputesApi,
} from "./entity1-razorpay-disputes-api.js";
import { settlementReconRecordSchema, type SettlementReconRecord } from "./settlement-recon-record.js";

export type SettlementsReconCombinedResponse = {
  entity?: Entity1RazorpayDisputesApi;
  /** Number of items in the current page. */
  count?: number;
  items?: SettlementReconRecord[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const settlementsReconCombinedResponseSchema: Schema<SettlementsReconCombinedResponse> =
  s.object<SettlementsReconCombinedResponse>(
    {
      entity: s.optional(s.lazy(() => entity1RazorpayDisputesApiSchema)),
      count: s.optional(s.int()),
      items: s.optional(s.array(s.lazy(() => settlementReconRecordSchema))),
    },
    { additionalProperties: s.json() },
  );
