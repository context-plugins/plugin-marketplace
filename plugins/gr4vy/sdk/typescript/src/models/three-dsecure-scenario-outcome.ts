import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  threeDSecureScenarioOutcomeAuthentication2Schema,
  type ThreeDSecureScenarioOutcomeAuthentication2,
} from "./three-dsecure-scenario-outcome-authentication2.js";
import { result1Schema, type Result1 } from "./unions/result1.js";
import { versionSchema, type Version } from "./unions/version.js";

export type ThreeDSecureScenarioOutcome = {
  /** The version of 3DS which will be simulated. */
  version?: Version;
  /** 3DS authentication value. */
  authentication: ThreeDSecureScenarioOutcomeAuthentication2;
  /** 3DS result value. Required if authentication status is "C". */
  result?: Result1;
};

export const threeDSecureScenarioOutcomeSchema: Schema<ThreeDSecureScenarioOutcome> =
  s.object<ThreeDSecureScenarioOutcome>({
    version: s.optional(s.lazy(() => versionSchema)),
    authentication: threeDSecureScenarioOutcomeAuthentication2Schema,
    result: s.optional(s.lazy(() => result1Schema)),
  });
