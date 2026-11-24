import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  awsMonthlyPotentialSavingsInternalSchema,
  awsMonthlyPotentialSavingsSchema,
  type AwsMonthlyPotentialSavings,
} from "./aws-monthly-potential-savings.js";
import { stats30DInternalSchema, stats30DSchema, type Stats30D } from "./stats30-d.js";

export type AwsMemberAccount = {
  /** 12-digit AWS member account ID. */
  memberAccountId: string;
  /** 12-digit AWS management (payer) account ID of the parent AWS Organization. */
  managementAccountId: string;
  /**
   * Human-readable account name, if available. Defaults to the AWS Organizations account name; may
   * be overridden by a custom name set on the asset in the DoiT Console. Null when no name is
   * available.
   */
  displayName?: string | null;
  /** Trailing 30-day aggregate metrics per SP type (`compute`, `database`). */
  stats30D?: Stats30D;
  /**
   * Estimated monthly additional savings per SP type for this member account, attributed from the
   * parent AWS organization's projection by share of trailing-60-day Savings Plan-eligible
   * on-demand cost.
   */
  monthlyPotentialSavings?: AwsMonthlyPotentialSavings;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const awsMemberAccountProperties: s.Shape<AwsMemberAccount> = {
  memberAccountId: s.string(),
  managementAccountId: s.string(),
  displayName: s.optionalNullable(s.string()),
  stats30D: s.optional(s.lazy(() => stats30DInternalSchema)),
  monthlyPotentialSavings: s.optional(s.lazy(() => awsMonthlyPotentialSavingsInternalSchema)),
  _keysMap: {
    stats30D: "stats30d",
  },
};

export const awsMemberAccountInternalSchema: Schema<AwsMemberAccount> = s.object<AwsMemberAccount>(
  awsMemberAccountProperties,
  { additionalProperties: s.json() },
);

export const awsMemberAccountSchema: Schema<AwsMemberAccount> = s.lazySchema(() =>
  s.object<AwsMemberAccount>(
    {
      ...awsMemberAccountProperties,
      stats30D: s.optional(s.lazy(() => stats30DSchema)),
      monthlyPotentialSavings: s.optional(s.lazy(() => awsMonthlyPotentialSavingsSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
