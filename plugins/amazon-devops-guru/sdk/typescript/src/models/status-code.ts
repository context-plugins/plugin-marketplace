import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * This is an enum of the status showing whether the metric value pair list has partial or complete
 * data, or if there was an error.
 */
export const StatusCode = {
  Complete: "Complete",
  InternalError: "InternalError",
  PartialData: "PartialData",
} as const;
export type StatusCode = (typeof StatusCode)[keyof typeof StatusCode] | (string & {});

export const statusCodeSchema: EnumSchema<StatusCode> = s.enumOf<StatusCode>(StatusCode);
