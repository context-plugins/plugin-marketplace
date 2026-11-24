import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current onboarding lifecycle stage for this product line. */
export const Status1DoiTPerfectScaleForCommitmentsAwsApi = {
  NotStarted: "not_started",
  Onboarding: "onboarding",
  Done: "done",
  Error: "error",
} as const;
export type Status1DoiTPerfectScaleForCommitmentsAwsApi =
  | (typeof Status1DoiTPerfectScaleForCommitmentsAwsApi)[keyof typeof Status1DoiTPerfectScaleForCommitmentsAwsApi]
  | (string & {});

export const status1DoiTPerfectScaleForCommitmentsAwsApiSchema: EnumSchema<Status1DoiTPerfectScaleForCommitmentsAwsApi> =
  s.enumOf<Status1DoiTPerfectScaleForCommitmentsAwsApi>(Status1DoiTPerfectScaleForCommitmentsAwsApi);
