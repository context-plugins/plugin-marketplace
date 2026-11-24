import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { commitmentTermSchema, type CommitmentTerm } from "./commitment-term.js";
import { moneyInternalSchema, moneySchema, type Money } from "./money.js";
import { paymentOption1Schema, type PaymentOption1 } from "./payment-option1.js";
import { savingsPlanTypeSchema, type SavingsPlanType } from "./savings-plan-type.js";
import { stateSchema, type State } from "./state.js";

export type AwsSavingsPlan = {
  /** Savings Plan ID (AWS-assigned GUID). */
  commitmentId: string;
  /**
   * Full ARN (Amazon Resource Name) of the Savings Plan, when known. `null` when DoiT doesn’t have
   * the ARN stored yet.
   */
  savingsPlanArn?: string | null;
  /** Savings Plan type. Values match the AWS Savings Plans API in snake_case, plus `database`. */
  savingsPlanType: SavingsPlanType;
  /** Savings Plan lifecycle state. Values match the AWS Savings Plans API in snake_case. */
  state: State;
  /** Upfront payment structure for this Savings Plan. */
  paymentOption?: PaymentOption1;
  /** Commitment term length for this Savings Plan. */
  termDuration?: CommitmentTerm;
  /** Hourly commitment amount. */
  commitment?: Money;
  /** Upfront payment amount. Null or omitted when payment option is `no_upfront`. */
  upfrontPaymentAmount?: Money;
  /** Recurring (typically hourly or monthly) payment amount after any upfront. */
  recurringPaymentAmount?: Money;
  /**
   * EC2 instance family for `ec2_instance` plans (for example, `m5`). Null for other plan types.
   */
  ec2InstanceFamily?: string | null;
  /**
   * AWS region for plans that are region-scoped (for example, `us-east-1`). Null when not
   * applicable.
   */
  region?: string | null;
  /** When the Savings Plan started or is scheduled to start. Null when unknown. */
  startTime?: Date | null;
  /** When the Savings Plan ends or ended. Null when unknown. */
  endTime?: Date | null;
  /**
   * Utilization in the last full calendar month, as a fraction from 0 to 1. Null when not yet
   * available.
   */
  lastMonthUtilization?: number | null;
  /** Realized savings in the last full calendar month. Null if not yet available. */
  lastMonthSavings?: Money;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const awsSavingsPlanProperties: s.Shape<AwsSavingsPlan> = {
  commitmentId: s.string(),
  savingsPlanArn: s.optionalNullable(s.string()),
  savingsPlanType: savingsPlanTypeSchema,
  state: stateSchema,
  paymentOption: s.optional(s.lazy(() => paymentOption1Schema)),
  termDuration: s.optional(s.lazy(() => commitmentTermSchema)),
  commitment: s.optional(s.lazy(() => moneyInternalSchema)),
  upfrontPaymentAmount: s.optional(s.lazy(() => moneyInternalSchema)),
  recurringPaymentAmount: s.optional(s.lazy(() => moneyInternalSchema)),
  ec2InstanceFamily: s.optionalNullable(s.string()),
  region: s.optionalNullable(s.string()),
  startTime: s.optionalNullable(s.dateTime()),
  endTime: s.optionalNullable(s.dateTime()),
  lastMonthUtilization: s.optionalNullable(s.float64()),
  lastMonthSavings: s.optional(s.lazy(() => moneyInternalSchema)),
};

export const awsSavingsPlanInternalSchema: Schema<AwsSavingsPlan> = s.object<AwsSavingsPlan>(
  awsSavingsPlanProperties,
  { additionalProperties: s.json() },
);

export const awsSavingsPlanSchema: Schema<AwsSavingsPlan> = s.lazySchema(() =>
  s.object<AwsSavingsPlan>(
    {
      ...awsSavingsPlanProperties,
      commitment: s.optional(s.lazy(() => moneySchema)),
      upfrontPaymentAmount: s.optional(s.lazy(() => moneySchema)),
      recurringPaymentAmount: s.optional(s.lazy(() => moneySchema)),
      lastMonthSavings: s.optional(s.lazy(() => moneySchema)),
    },
    { additionalProperties: s.json() },
  ),
);
