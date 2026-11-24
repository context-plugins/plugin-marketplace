import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Tracks the usage of an entitlement for a customer */
export type EntitlementUsage = {
  id: string;
  createdAt?: Date;
  updatedAt?: Date;
  organizationId: string;
  productId: string;
  entitlementId: string;
  customerId: string;
  startDate: Date;
  endDate?: Date | null;
  /** Total entitlement amount */
  total: number;
  /** Available entitlement amount */
  available: number;
  /** Used entitlement amount */
  used: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const entitlementUsageSchema: Schema<EntitlementUsage> = s.object<EntitlementUsage>(
  {
    id: s.string(),
    createdAt: s.optional(s.dateTime()),
    updatedAt: s.optional(s.dateTime()),
    organizationId: s.string(),
    productId: s.string(),
    entitlementId: s.string(),
    customerId: s.string(),
    startDate: s.dateTime(),
    endDate: s.optionalNullable(s.dateTime()),
    total: s.int(),
    available: s.int(),
    used: s.int(),
  },
  { additionalProperties: s.json() },
);
