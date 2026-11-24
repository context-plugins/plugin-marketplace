import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current onboarding lifecycle stage for this product line. */
export const StatusDoiTPerfectScaleForCommitmentsGcpApi = {
  NotStarted: "not_started",
  Onboarding: "onboarding",
  Done: "done",
  Error: "error",
} as const;
export type StatusDoiTPerfectScaleForCommitmentsGcpApi =
  | (typeof StatusDoiTPerfectScaleForCommitmentsGcpApi)[keyof typeof StatusDoiTPerfectScaleForCommitmentsGcpApi]
  | (string & {});

export const statusDoiTPerfectScaleForCommitmentsGcpApiSchema: EnumSchema<StatusDoiTPerfectScaleForCommitmentsGcpApi> =
  s.enumOf<StatusDoiTPerfectScaleForCommitmentsGcpApi>(StatusDoiTPerfectScaleForCommitmentsGcpApi);
