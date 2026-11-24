import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FacetBitlyQrCodesApi = {
  Countries: "countries",
  Cities: "cities",
  DeviceOs: "device_os",
  Browsers: "browsers",
  Destinations: "destinations",
} as const;
export type FacetBitlyQrCodesApi =
  | (typeof FacetBitlyQrCodesApi)[keyof typeof FacetBitlyQrCodesApi]
  | (string & {});

export const facetBitlyQrCodesApiSchema: EnumSchema<FacetBitlyQrCodesApi> =
  s.enumOf<FacetBitlyQrCodesApi>(FacetBitlyQrCodesApi);
