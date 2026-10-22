import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The SentinelOne region to send events to. In most cases you can find the region by either looking
 * at your SentinelOne URL or knowing what geographic region your SentinelOne instance is contained
 * in.
 */
export const Region2 = {
  Us: "US",
  Ca: "CA",
  Emea: "EMEA",
  Ap: "AP",
  Aps: "APS",
  Au: "AU",
  Custom: "Custom",
} as const;
export type Region2 = (typeof Region2)[keyof typeof Region2] | (string & {});

export const region2Schema: EnumSchema<Region2> = s.enumOf<Region2>(Region2);
