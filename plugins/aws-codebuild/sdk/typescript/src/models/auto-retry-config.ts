import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AutoRetryConfig = {
  /**
   * The maximum number of additional automatic retries after a failed build. For example, if the
   * auto-retry limit is set to 2, CodeBuild will call the RetryBuild API to automatically retry
   * your build for up to 2 additional times.
   */
  autoRetryLimit?: number;
  /**
   * The number of times that the build has been retried. The initial build will have an auto-retry
   * number of 0.
   */
  autoRetryNumber?: number;
  /**
   * The build ARN of the auto-retried build triggered by the current build. The next auto-retry
   * will be null for builds that don't trigger an auto-retry.
   */
  nextAutoRetry?: string;
  /**
   * The build ARN of the build that triggered the current auto-retry build. The previous auto-retry
   * will be null for the initial build.
   */
  previousAutoRetry?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const autoRetryConfigSchema: Schema<AutoRetryConfig> = s.object<AutoRetryConfig>(
  {
    autoRetryLimit: s.optional(s.int()),
    autoRetryNumber: s.optional(s.int()),
    nextAutoRetry: s.optional(s.string()),
    previousAutoRetry: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
