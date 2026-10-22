import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  threeDSecureScenarioOutcomeResultSchema,
  type ThreeDSecureScenarioOutcomeResult,
} from "../three-dsecure-scenario-outcome-result.js";

/** 3DS result value. Required if authentication status is "C". */
export type Result1 = ThreeDSecureScenarioOutcomeResult;

export const result1Schema: Schema<Result1> = s.of<Result1>(
  s.union([s.lazy(() => threeDSecureScenarioOutcomeResultSchema)]),
);
