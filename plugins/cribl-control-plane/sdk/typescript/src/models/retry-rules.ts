import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { retryTypeSchema, type RetryType } from "./retry-type.js";

/** Settings that control how the Collector retries failed HTTP requests. */
export type RetryRules = {
  /** The algorithm to use when performing HTTP retries */
  type: RetryType;
};

export const retryRulesSchema: Schema<RetryRules> = s.object<RetryRules>({
  type: retryTypeSchema,
});
