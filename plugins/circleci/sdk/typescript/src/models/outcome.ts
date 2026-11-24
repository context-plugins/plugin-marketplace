import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The build outcome */
export const Outcome = {
  Canceled: "canceled",
  InfrastructureFail: "infrastructure_fail",
  Timedout: "timedout",
  Failed: "failed",
  NoTests: "no_tests",
  Success: "success",
} as const;
export type Outcome = (typeof Outcome)[keyof typeof Outcome] | (string & {});

export const outcomeSchema: EnumSchema<Outcome> = s.enumOf<Outcome>(Outcome);
