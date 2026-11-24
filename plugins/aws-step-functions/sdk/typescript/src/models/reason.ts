import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The input does not satisfy the constraints specified by an Amazon Web Services service. */
export const Reason = {
  ApiDoesNotSupportLabeledArns: "API_DOES_NOT_SUPPORT_LABELED_ARNS",
  MissingRequiredParameter: "MISSING_REQUIRED_PARAMETER",
  CannotUpdateCompletedMapRun: "CANNOT_UPDATE_COMPLETED_MAP_RUN",
  InvalidRoutingConfiguration: "INVALID_ROUTING_CONFIGURATION",
} as const;
export type Reason = (typeof Reason)[keyof typeof Reason] | (string & {});

export const reasonSchema: EnumSchema<Reason> = s.enumOf<Reason>(Reason);
