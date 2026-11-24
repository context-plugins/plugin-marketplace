import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  gcpPlannedPurchaseInternalSchema,
  gcpPlannedPurchaseSchema,
  type GcpPlannedPurchase,
} from "./gcp-planned-purchase.js";
import { service6Schema, type Service6 } from "./service6.js";

/** Planned purchase projections for one PS4C product line. */
export type GcpPlannedPurchaseByService = {
  /** Commitment type this projection group belongs to. */
  service: Service6;
  /** GCP Billing Account ID. */
  billingAccountId: string;
  /**
   * Per-region projection entries for this service, sorted with `global` first, then remaining
   * regions alphabetically.
   */
  regions: GcpPlannedPurchase[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const gcpPlannedPurchaseByServiceProperties: s.Shape<GcpPlannedPurchaseByService> = {
  service: service6Schema,
  billingAccountId: s.string(),
  regions: s.array(s.lazy(() => gcpPlannedPurchaseInternalSchema)),
};

export const gcpPlannedPurchaseByServiceInternalSchema: Schema<GcpPlannedPurchaseByService> =
  s.object<GcpPlannedPurchaseByService>(gcpPlannedPurchaseByServiceProperties, {
    additionalProperties: s.json(),
  });

export const gcpPlannedPurchaseByServiceSchema: Schema<GcpPlannedPurchaseByService> = s.lazySchema(() =>
  s.object<GcpPlannedPurchaseByService>(
    {
      ...gcpPlannedPurchaseByServiceProperties,
      regions: s.array(s.lazy(() => gcpPlannedPurchaseSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
