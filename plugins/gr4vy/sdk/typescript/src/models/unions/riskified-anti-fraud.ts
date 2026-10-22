import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  riskifiedAntiFraudOptionsSchema,
  type RiskifiedAntiFraudOptions,
} from "../riskified-anti-fraud-options.js";

/** Custom options to be passed to the `riskified-anti-fraud` connector. */
export type RiskifiedAntiFraud = RiskifiedAntiFraudOptions;

export const riskifiedAntiFraudSchema: Schema<RiskifiedAntiFraud> = s.of<RiskifiedAntiFraud>(
  s.union([s.lazy(() => riskifiedAntiFraudOptionsSchema)]),
);
