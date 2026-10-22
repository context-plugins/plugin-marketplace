import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AntiFraudDecision = {
  Accept: "accept",
  Error: "error",
  Exception: "exception",
  Reject: "reject",
  Review: "review",
  Skipped: "skipped",
  Pending: "pending",
} as const;
export type AntiFraudDecision = (typeof AntiFraudDecision)[keyof typeof AntiFraudDecision] | (string & {});

export const antiFraudDecisionSchema: EnumSchema<AntiFraudDecision> =
  s.enumOf<AntiFraudDecision>(AntiFraudDecision);
