import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  awsReservedInstanceRecurringChargeSchema,
  type AwsReservedInstanceRecurringCharge,
} from "./aws-reserved-instance-recurring-charge.js";
import { commitmentTermSchema, type CommitmentTerm } from "./commitment-term.js";
import { moneyInternalSchema, moneySchema, type Money } from "./money.js";
import { offeringClassSchema, type OfferingClass } from "./offering-class.js";
import { state1Schema, type State1 } from "./state1.js";

/**
 * Reserved Instance item in the external inventory response. Money fields are wrapped `{amount,
 * currency}` objects.
 */
export type AwsReservedInstance = {
  /** Reserved Instance ID (AWS-assigned). */
  commitmentId: string;
  /** Full Amazon Resource Name (ARN) of the Reserved Instance, when known. */
  reservedInstanceArn?: string | null;
  /** AWS account ID where the Reserved Instance exists. */
  accountId: string;
  /**
   * Reserved Instance state, tracking the AWS EC2 Reserved Instance API verbatim in external
   * snake_case form. Differs from Savings Plan states by design. For example, the terminal state is
   * `retired` here vs `expired` on Savings Plans.
   */
  state: State1;
  /** EC2 instance type on which the RI can be used (for example, `m5.large`). */
  instanceType: string;
  /** Number of instances covered by this Reserved Instance. Null when unknown. */
  instanceCount?: number | null;
  /** Tenancy of the instance (for example, `default`, `dedicated`). */
  instanceTenancy?: string;
  /** Availability Zone when the RI is AZ-scoped. Null for region-scoped RIs. */
  availabilityZone?: string | null;
  /** AWS region of the Reserved Instance (for example, `us-east-1`). Null when unknown. */
  region?: string | null;
  /** Platform identifier from AWS (for example, Linux/UNIX). Null when unknown. */
  platform?: string | null;
  /** Product platform description from AWS inventory. */
  description?: string;
  /** Scope of the Reserved Instance (for example, `Availability Zone`, `Region`). */
  scope?: string;
  /** RI offering class. */
  offeringClass?: OfferingClass;
  /** RI offering type / payment option label from AWS (for example, `All Upfront`). */
  offeringType?: string;
  /** Term inferred from the RI duration. Absent when it does not map cleanly to 1yr / 3yr. */
  termDuration?: CommitmentTerm;
  /** RI duration in seconds. */
  durationSeconds?: number | null;
  /** When the Reserved Instance started. Null when unknown. */
  startTime?: Date | null;
  /** When the Reserved Instance ends or ended. Null when unknown. */
  endTime?: Date | null;
  /** ISO 4217 currency code (USD in practice). */
  currencyCode?: string;
  /** Purchase price of the Reserved Instance. */
  fixedPrice?: Money;
  /** Usage price per hour. */
  usagePrice?: Money;
  /** Hourly recurring fee for the Reserved Instance. */
  hourlyRecurringFee?: Money;
  /** Upfront fee paid for the Reserved Instance. */
  upfrontFee?: Money;
  /** Total asset value of the Reserved Instance over its term. */
  totalAssetValue?: Money;
  /** Average on-demand hourly rate used for savings comparisons. */
  averageOnDemandHourlyRate?: Money;
  /** Amortized recurring fee over the RI term. */
  amortizedRecurringFee?: Money;
  /** Amortized upfront fee over the RI term. */
  amortizedUpfrontFee?: Money;
  /** Sum of amortized upfront and recurring fees. */
  totalAmortizedFee?: Money;
  /** Net savings from the Reserved Instance versus on-demand. */
  netRiSavings?: Money;
  /** Realized savings from hours actually covered by the RI. */
  realizedSavings?: Money;
  /** Forgone savings from unused RI hours. */
  unrealizedSavings?: Money;
  /** Total potential savings if the RI were fully utilized. */
  totalPotentialRiSavings?: Money;
  /** On-demand cost equivalent of the RI hours that were used. */
  onDemandCostOfRiHoursUsed?: Money;
  /** RI cost attributable to unused hours. */
  riCostForUnusedHours?: Money;
  /** Total hours purchased for this RI in the reporting window. Null when unknown. */
  purchasedHours?: number | null;
  /** Total normalized units purchased. Null when unknown. */
  purchasedUnits?: number | null;
  /** Hours actually used against the RI. Null when unknown. */
  totalActualHours?: number | null;
  /** Normalized units actually used. Null when unknown. */
  totalNormalizedUnits?: number | null;
  /** Purchased hours that were not used. Null when unknown. */
  unusedHours?: number | null;
  /** Purchased normalized units that were not used. Null when unknown. */
  unusedNormalizedUnits?: number | null;
  /** Cost Explorer reported utilization, as a fraction from 0 to 1. */
  utilizationPercentage?: number | null;
  /** Utilization percentage based on normalized units (0–1). Null when unknown. */
  utilizationPercentageInUnits?: number | null;
  /** Month-to-date realized savings. */
  mtdSavings: Money;
  /**
   * Month-to-date utilization (0–1). Null when not yet available. A stored 0% is indistinguishable
   * from unavailable and is returned as null.
   */
  mtdUtilization?: number | null;
  /** Timestamp of the last successful inventory sync for this Reserved Instance. */
  updatedAt?: Date | null;
  /** Recurring charge schedule from AWS for this Reserved Instance. */
  recurringCharges?: AwsReservedInstanceRecurringCharge[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const awsReservedInstanceProperties: s.Shape<AwsReservedInstance> = {
  commitmentId: s.string(),
  reservedInstanceArn: s.optionalNullable(s.string()),
  accountId: s.string(),
  state: state1Schema,
  instanceType: s.string(),
  instanceCount: s.optionalNullable(s.int()),
  instanceTenancy: s.optional(s.string()),
  availabilityZone: s.optionalNullable(s.string()),
  region: s.optionalNullable(s.string()),
  platform: s.optionalNullable(s.string()),
  description: s.optional(s.string()),
  scope: s.optional(s.string()),
  offeringClass: s.optional(s.lazy(() => offeringClassSchema)),
  offeringType: s.optional(s.string()),
  termDuration: s.optional(s.lazy(() => commitmentTermSchema)),
  durationSeconds: s.optionalNullable(s.int()),
  startTime: s.optionalNullable(s.dateTime()),
  endTime: s.optionalNullable(s.dateTime()),
  currencyCode: s.optional(s.string()),
  fixedPrice: s.optional(s.lazy(() => moneyInternalSchema)),
  usagePrice: s.optional(s.lazy(() => moneyInternalSchema)),
  hourlyRecurringFee: s.optional(s.lazy(() => moneyInternalSchema)),
  upfrontFee: s.optional(s.lazy(() => moneyInternalSchema)),
  totalAssetValue: s.optional(s.lazy(() => moneyInternalSchema)),
  averageOnDemandHourlyRate: s.optional(s.lazy(() => moneyInternalSchema)),
  amortizedRecurringFee: s.optional(s.lazy(() => moneyInternalSchema)),
  amortizedUpfrontFee: s.optional(s.lazy(() => moneyInternalSchema)),
  totalAmortizedFee: s.optional(s.lazy(() => moneyInternalSchema)),
  netRiSavings: s.optional(s.lazy(() => moneyInternalSchema)),
  realizedSavings: s.optional(s.lazy(() => moneyInternalSchema)),
  unrealizedSavings: s.optional(s.lazy(() => moneyInternalSchema)),
  totalPotentialRiSavings: s.optional(s.lazy(() => moneyInternalSchema)),
  onDemandCostOfRiHoursUsed: s.optional(s.lazy(() => moneyInternalSchema)),
  riCostForUnusedHours: s.optional(s.lazy(() => moneyInternalSchema)),
  purchasedHours: s.optionalNullable(s.int()),
  purchasedUnits: s.optionalNullable(s.int()),
  totalActualHours: s.optionalNullable(s.int()),
  totalNormalizedUnits: s.optionalNullable(s.int()),
  unusedHours: s.optionalNullable(s.int()),
  unusedNormalizedUnits: s.optionalNullable(s.int()),
  utilizationPercentage: s.optionalNullable(s.float64()),
  utilizationPercentageInUnits: s.optionalNullable(s.float64()),
  mtdSavings: moneyInternalSchema,
  mtdUtilization: s.optionalNullable(s.float64()),
  updatedAt: s.optionalNullable(s.dateTime()),
  recurringCharges: s.optional(s.array(s.lazy(() => awsReservedInstanceRecurringChargeSchema))),
};

export const awsReservedInstanceInternalSchema: Schema<AwsReservedInstance> = s.object<AwsReservedInstance>(
  awsReservedInstanceProperties,
  { additionalProperties: s.json() },
);

export const awsReservedInstanceSchema: Schema<AwsReservedInstance> = s.lazySchema(() =>
  s.object<AwsReservedInstance>(
    {
      ...awsReservedInstanceProperties,
      fixedPrice: s.optional(s.lazy(() => moneySchema)),
      usagePrice: s.optional(s.lazy(() => moneySchema)),
      hourlyRecurringFee: s.optional(s.lazy(() => moneySchema)),
      upfrontFee: s.optional(s.lazy(() => moneySchema)),
      totalAssetValue: s.optional(s.lazy(() => moneySchema)),
      averageOnDemandHourlyRate: s.optional(s.lazy(() => moneySchema)),
      amortizedRecurringFee: s.optional(s.lazy(() => moneySchema)),
      amortizedUpfrontFee: s.optional(s.lazy(() => moneySchema)),
      totalAmortizedFee: s.optional(s.lazy(() => moneySchema)),
      netRiSavings: s.optional(s.lazy(() => moneySchema)),
      realizedSavings: s.optional(s.lazy(() => moneySchema)),
      unrealizedSavings: s.optional(s.lazy(() => moneySchema)),
      totalPotentialRiSavings: s.optional(s.lazy(() => moneySchema)),
      onDemandCostOfRiHoursUsed: s.optional(s.lazy(() => moneySchema)),
      riCostForUnusedHours: s.optional(s.lazy(() => moneySchema)),
      mtdSavings: moneySchema,
    },
    { additionalProperties: s.json() },
  ),
);
