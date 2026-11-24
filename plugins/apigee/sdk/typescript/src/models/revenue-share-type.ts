import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Method used to calculate the revenue that is shared with developers. */
export const RevenueShareType = {
  RevenueShareTypeUnspecified: "REVENUE_SHARE_TYPE_UNSPECIFIED",
  Fixed: "FIXED",
  VolumeBanded: "VOLUME_BANDED",
} as const;
export type RevenueShareType = (typeof RevenueShareType)[keyof typeof RevenueShareType] | (string & {});

export const revenueShareTypeSchema: EnumSchema<RevenueShareType> =
  s.enumOf<RevenueShareType>(RevenueShareType);
