import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { moneyInternalSchema, moneySchema, type Money } from "./money.js";

/**
 * One day of commitment-coverage breakdown. Money fields are wrapped objects (`{amount,
 * currency}`). Omitted cost properties mean that coverage type had no spend for the day.
 */
export type AwsDailyCoverageEntry = {
  /** Calendar day (UTC) for this coverage row in format YYYY-MM-DD. */
  date: string;
  /** On-demand spend not covered by commitments for the day. */
  onDemandCost?: Money;
  /** Spend covered by Savings Plans for the day. */
  savingsPlanCost?: Money;
  /** Spend covered by Reserved Instances for the day. */
  reservedInstCost?: Money;
  /** Spend covered by DoiT Flexsave for the day. */
  flexsaveCost?: Money;
  /** Spot Instance spend for the day. */
  spotCost?: Money;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const awsDailyCoverageEntryProperties: s.Shape<AwsDailyCoverageEntry> = {
  date: s.dateOnly(),
  onDemandCost: s.optional(s.lazy(() => moneyInternalSchema)),
  savingsPlanCost: s.optional(s.lazy(() => moneyInternalSchema)),
  reservedInstCost: s.optional(s.lazy(() => moneyInternalSchema)),
  flexsaveCost: s.optional(s.lazy(() => moneyInternalSchema)),
  spotCost: s.optional(s.lazy(() => moneyInternalSchema)),
};

export const awsDailyCoverageEntryInternalSchema: Schema<AwsDailyCoverageEntry> =
  s.object<AwsDailyCoverageEntry>(awsDailyCoverageEntryProperties, { additionalProperties: s.json() });

export const awsDailyCoverageEntrySchema: Schema<AwsDailyCoverageEntry> = s.lazySchema(() =>
  s.object<AwsDailyCoverageEntry>(
    {
      ...awsDailyCoverageEntryProperties,
      onDemandCost: s.optional(s.lazy(() => moneySchema)),
      savingsPlanCost: s.optional(s.lazy(() => moneySchema)),
      reservedInstCost: s.optional(s.lazy(() => moneySchema)),
      flexsaveCost: s.optional(s.lazy(() => moneySchema)),
      spotCost: s.optional(s.lazy(() => moneySchema)),
    },
    { additionalProperties: s.json() },
  ),
);
