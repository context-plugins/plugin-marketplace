import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Required. The length of time that user-level data is retained. */
export const UserDataRetention = {
  RetentionDurationUnspecified: "RETENTION_DURATION_UNSPECIFIED",
  TwoMonths: "TWO_MONTHS",
  FourteenMonths: "FOURTEEN_MONTHS",
  TwentySixMonths: "TWENTY_SIX_MONTHS",
  ThirtyEightMonths: "THIRTY_EIGHT_MONTHS",
  FiftyMonths: "FIFTY_MONTHS",
} as const;
export type UserDataRetention = (typeof UserDataRetention)[keyof typeof UserDataRetention] | (string & {});

export const userDataRetentionSchema: EnumSchema<UserDataRetention> =
  s.enumOf<UserDataRetention>(UserDataRetention);
