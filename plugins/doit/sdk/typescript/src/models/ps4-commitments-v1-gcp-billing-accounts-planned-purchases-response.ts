import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  gcpPlannedPurchaseByServiceInternalSchema,
  gcpPlannedPurchaseByServiceSchema,
  type GcpPlannedPurchaseByService,
} from "./gcp-planned-purchase-by-service.js";

export type Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse = {
  items: GcpPlannedPurchaseByService[];
  pageToken?: string | null;
  /** Number of service groups in `items` for this response. */
  rowCount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponseProperties: s.Shape<Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse> =
  {
    items: s.array(s.lazy(() => gcpPlannedPurchaseByServiceInternalSchema)),
    pageToken: s.optionalNullable(s.string()),
    rowCount: s.int(),
  };

export const ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponseInternalSchema: Schema<Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse> =
  s.object<Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse>(
    ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponseProperties,
    { additionalProperties: s.json() },
  );

export const ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponseSchema: Schema<Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse> =
  s.lazySchema(() =>
    s.object<Ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponse>(
      {
        ...ps4CommitmentsV1GcpBillingAccountsPlannedPurchasesResponseProperties,
        items: s.array(s.lazy(() => gcpPlannedPurchaseByServiceSchema)),
      },
      { additionalProperties: s.json() },
    ),
  );
