import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AcquisitionSource = {
  HighPaidChannel: "high_paid_channel",
} as const;
export type AcquisitionSource = (typeof AcquisitionSource)[keyof typeof AcquisitionSource] | (string & {});

export const acquisitionSourceSchema: EnumSchema<AcquisitionSource> =
  s.enumOf<AcquisitionSource>(AcquisitionSource);
