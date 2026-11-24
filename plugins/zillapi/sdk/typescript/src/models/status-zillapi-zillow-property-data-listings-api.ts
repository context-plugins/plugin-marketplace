import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Listing status. */
export const StatusZillapiZillowPropertyDataListingsApi = {
  ForSale: "for_sale",
  ForRent: "for_rent",
  Sold: "sold",
} as const;
export type StatusZillapiZillowPropertyDataListingsApi =
  | (typeof StatusZillapiZillowPropertyDataListingsApi)[keyof typeof StatusZillapiZillowPropertyDataListingsApi]
  | (string & {});

export const statusZillapiZillowPropertyDataListingsApiSchema: EnumSchema<StatusZillapiZillowPropertyDataListingsApi> =
  s.enumOf<StatusZillapiZillowPropertyDataListingsApi>(StatusZillapiZillowPropertyDataListingsApi);
