import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  threeDSecureScenarioOutcomeSchema,
  type ThreeDSecureScenarioOutcome,
} from "../three-dsecure-scenario-outcome.js";

/** Outcome for the scenario. */
export type Outcome = ThreeDSecureScenarioOutcome;

export const outcomeSchema: Schema<Outcome> = s.of<Outcome>(
  s.union([s.lazy(() => threeDSecureScenarioOutcomeSchema)]),
);
