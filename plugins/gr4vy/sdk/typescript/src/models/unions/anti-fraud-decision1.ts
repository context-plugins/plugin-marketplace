import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { antiFraudDecisionSchema, type AntiFraudDecision } from "../anti-fraud-decision.js";

/**
 * The mapped decision received from the anti-fraud service. In case of a review decision this field
 * is not updated once the review is resolved.
 */
export type AntiFraudDecision1 = AntiFraudDecision;

export const antiFraudDecision1Schema: Schema<AntiFraudDecision1> = s.of<AntiFraudDecision1>(
  s.union([s.lazy(() => antiFraudDecisionSchema)]),
);
