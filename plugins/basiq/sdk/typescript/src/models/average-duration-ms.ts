import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * AverageDurationMs average connector duration in milliseconds per segments. When durations are not
 * known for institution this field will be `null`.
 */
export type AverageDurationMs = {
  /** Connector average duration in milliseconds of <b>fetch accounts</b> step for institution */
  retrieveAccounts?: number;
  /** Connector average duration in milliseconds of <b>fetch metadata</b> step for institution */
  retrieveMeta?: number;
  /**
   * Connector average duration in milliseconds of <b>fetch transactions</b> step for institution
   */
  retrieveTransactions?: number;
  /** Total connector average duration in milliseconds */
  total?: number;
  /**
   * Connector average duration in milliseconds of <b>verifiy credentials</b> step for institution
   */
  verifyCredentials?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const averageDurationMsSchema: Schema<AverageDurationMs> = s.object<AverageDurationMs>(
  {
    retrieveAccounts: s.optional(s.int()),
    retrieveMeta: s.optional(s.int()),
    retrieveTransactions: s.optional(s.int()),
    total: s.optional(s.int()),
    verifyCredentials: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
