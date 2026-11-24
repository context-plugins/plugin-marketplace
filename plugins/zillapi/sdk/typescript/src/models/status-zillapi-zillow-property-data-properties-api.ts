import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const StatusZillapiZillowPropertyDataPropertiesApi = {
  ForSale: "FOR_SALE",
  RecentlySold: "RECENTLY_SOLD",
  ForRent: "FOR_RENT",
} as const;
export type StatusZillapiZillowPropertyDataPropertiesApi =
  | (typeof StatusZillapiZillowPropertyDataPropertiesApi)[keyof typeof StatusZillapiZillowPropertyDataPropertiesApi]
  | (string & {});

export const statusZillapiZillowPropertyDataPropertiesApiSchema: EnumSchema<StatusZillapiZillowPropertyDataPropertiesApi> =
  s.enumOf<StatusZillapiZillowPropertyDataPropertiesApi>(StatusZillapiZillowPropertyDataPropertiesApi);
