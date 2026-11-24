import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { amountUsdInternalSchema, amountUsdSchema, type AmountUsd } from "./unions/amount-usd.js";
import { enabledSchema, type Enabled } from "./unions/enabled.js";
import {
  thresholdPercent1InternalSchema,
  thresholdPercent1Schema,
  type ThresholdPercent1,
} from "./unions/threshold-percent1.js";

export type SpendLimitUpdateRequest = {
  amountUsd?: AmountUsd;
  thresholdPercent?: ThresholdPercent1;
  enabled?: Enabled;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const spendLimitUpdateRequestProperties: s.Shape<SpendLimitUpdateRequest> = {
  amountUsd: s.optional(s.lazy(() => amountUsdInternalSchema)),
  thresholdPercent: s.optional(s.lazy(() => thresholdPercent1InternalSchema)),
  enabled: s.optional(s.lazy(() => enabledSchema)),
  _keysMap: {
    amountUsd: "amount_usd",
    thresholdPercent: "threshold_percent",
  },
};

export const spendLimitUpdateRequestInternalSchema: Schema<SpendLimitUpdateRequest> =
  s.object<SpendLimitUpdateRequest>(spendLimitUpdateRequestProperties, { additionalProperties: s.json() });

export const spendLimitUpdateRequestSchema: Schema<SpendLimitUpdateRequest> = s.lazySchema(() =>
  s.object<SpendLimitUpdateRequest>(
    {
      ...spendLimitUpdateRequestProperties,
      amountUsd: s.optional(s.lazy(() => amountUsdSchema)),
      thresholdPercent: s.optional(s.lazy(() => thresholdPercent1Schema)),
    },
    { additionalProperties: s.json() },
  ),
);
