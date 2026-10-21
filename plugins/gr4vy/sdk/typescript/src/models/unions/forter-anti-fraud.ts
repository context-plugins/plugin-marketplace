import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { forterAntiFraudOptionsSchema, type ForterAntiFraudOptions } from "../forter-anti-fraud-options.js";

/** Custom options to be passed to the `forter-anti-fraud` connector. */
export type ForterAntiFraud = ForterAntiFraudOptions;

export const forterAntiFraudSchema: Schema<ForterAntiFraud> = s.of<ForterAntiFraud>(
  s.union([s.lazy(() => forterAntiFraudOptionsSchema)]),
);
