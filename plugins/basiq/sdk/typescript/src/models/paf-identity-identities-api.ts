import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Postal Address File */
export type PafIdentityIdentitiesApi = {
  /** Delivery Point Identifier */
  dpid?: string;
  /** First Thoroughfare Number */
  thoroughfareNumber1?: number;
  /** First Thoroughfare Number Suffix */
  thoroughfareNumber1Suffix?: string;
  /** Second Thoroughfare Number */
  thoroughfareNumber2?: number;
  /** Second Thoroughfare Number Suffix */
  thoroughfareNumber2Suffix?: string;
  /** Flat Unit Type (e.g., Apartment, Unit) */
  flatUnitType?: string;
  /** Flat Unit Number */
  flatUnitNumber?: string;
  /** Floor Level Type (e.g., Level, Floor) */
  floorLevelType?: string;
  /** Floor Level Number */
  floorLevelNumber?: string;
  /** Lot Number */
  lotNumber?: string;
  /** First Building Name */
  buildingName1?: string;
  /** Second Building Name */
  buildingName2?: string;
  /** Street Name */
  streetName?: string;
  /** Street Type (e.g., St, Rd, Ave) */
  streetType?: string;
  /** Street Suffix (e.g., NW, SE) */
  streetSuffix?: string;
  /** Postal Delivery Type (e.g., PO Box, Locked Bag) */
  postalDeliveryType?: string;
  /** Postal Delivery Number */
  postalDeliveryNumber?: number;
  /** Postal Delivery Number Prefix */
  postalDeliveryNumberPrefix?: string;
  /** Locality Name */
  localityName?: string;
  /** Postcode */
  postcode?: string;
  /** State */
  state?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pafIdentityIdentitiesApiSchema: Schema<PafIdentityIdentitiesApi> =
  s.object<PafIdentityIdentitiesApi>(
    {
      dpid: s.optional(s.string()),
      thoroughfareNumber1: s.optional(s.int()),
      thoroughfareNumber1Suffix: s.optional(s.string()),
      thoroughfareNumber2: s.optional(s.int()),
      thoroughfareNumber2Suffix: s.optional(s.string()),
      flatUnitType: s.optional(s.string()),
      flatUnitNumber: s.optional(s.string()),
      floorLevelType: s.optional(s.string()),
      floorLevelNumber: s.optional(s.string()),
      lotNumber: s.optional(s.string()),
      buildingName1: s.optional(s.string()),
      buildingName2: s.optional(s.string()),
      streetName: s.optional(s.string()),
      streetType: s.optional(s.string()),
      streetSuffix: s.optional(s.string()),
      postalDeliveryType: s.optional(s.string()),
      postalDeliveryNumber: s.optional(s.int()),
      postalDeliveryNumberPrefix: s.optional(s.string()),
      localityName: s.optional(s.string()),
      postcode: s.optional(s.string()),
      state: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
