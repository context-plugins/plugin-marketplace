import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const QuantileDataStatus = {
  QuantileDataStatusUnspecified: "QUANTILE_DATA_STATUS_UNSPECIFIED",
  QuantileDataStatusCompleted: "QUANTILE_DATA_STATUS_COMPLETED",
  QuantileDataStatusFailed: "QUANTILE_DATA_STATUS_FAILED",
} as const;
export type QuantileDataStatus = (typeof QuantileDataStatus)[keyof typeof QuantileDataStatus] | (string & {});

export const quantileDataStatusSchema: EnumSchema<QuantileDataStatus> =
  s.enumOf<QuantileDataStatus>(QuantileDataStatus);
