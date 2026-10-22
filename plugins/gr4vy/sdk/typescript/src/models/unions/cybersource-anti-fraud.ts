import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  cybersourceAntiFraudOptionsSchema,
  type CybersourceAntiFraudOptions,
} from "../cybersource-anti-fraud-options.js";

/** Custom options to be passed to the `cybersource-anti-fraud` connector. */
export type CybersourceAntiFraud = CybersourceAntiFraudOptions;

export const cybersourceAntiFraudSchema: Schema<CybersourceAntiFraud> = s.of<CybersourceAntiFraud>(
  s.union([s.lazy(() => cybersourceAntiFraudOptionsSchema)]),
);
