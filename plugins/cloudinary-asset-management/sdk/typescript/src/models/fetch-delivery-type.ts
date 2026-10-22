import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Fetch-based delivery types for assets retrieved from remote URLs. */
export const FetchDeliveryType = {
  Fetch: "fetch",
  Url2Png: "url2png",
} as const;
export type FetchDeliveryType = (typeof FetchDeliveryType)[keyof typeof FetchDeliveryType] | (string & {});

export const fetchDeliveryTypeSchema: EnumSchema<FetchDeliveryType> =
  s.enumOf<FetchDeliveryType>(FetchDeliveryType);
