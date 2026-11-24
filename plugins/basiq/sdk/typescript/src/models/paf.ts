import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Australian address formatted according to the file format defined by the PAF file format. */
export type Paf = {
  /**
   * Unique identifier for an address as defined by Australia Post. Also known as Delivery Point
   * Identifier.
   */
  dpid?: string;
  /** Thoroughfare number for a property (first number in a property ranged address). */
  thoroughfareNumber1?: number;
  /** Suffix for the thoroughfare number. Only relevant is thoroughfareNumber1 is populated. */
  thoroughfareNumber1Suffix?: string;
  /** Second thoroughfare number (only used if the property has a ranged address eg 23-25). */
  thoroughfareNumber2?: number;
  /**
   * Suffix for the second thoroughfare number. Only relevant is thoroughfareNumber2 is populated.
   */
  thoroughfareNumber2Suffix?: string;
  /** Type of flat or unit for the address. */
  flatUnitType?: string;
  /** Unit number (including suffix, if applicable). */
  flatUnitNumber?: string;
  /** Type of floor or level for the address. */
  floorLevelType?: string;
  /** Floor or level number (including alpha characters). */
  floorLevelNumber?: string;
  /** Allotment number for the address. */
  lotNumber?: string;
  /** Building/Property name 1. */
  buildingName1?: string;
  /** Building/Property name 2. */
  buildingName2?: string;
  /** The name of the street. */
  streetName?: string;
  /** The street type. Valid enumeration defined by Australia Post PAF code file. */
  streetType?: string;
  /** The street type suffix. Valid enumeration defined by Australia Post PAF code file. */
  streetSuffix?: string;
  /**
   * Postal delivery type. (eg. PO BOX). Valid enumeration defined by Australia Post PAF code file.
   */
  postalDeliveryType?: string;
  /** Postal delivery number if the address is a postal delivery type. */
  postalDeliveryNumber?: number;
  /** Postal delivery number prefix related to the postal delivery number. */
  postalDeliveryNumberPrefix?: string;
  /** Postal delivery number suffix related to the postal delivery number. */
  postalDeliveryNumberSuffix?: string;
  /** Full name of locality. */
  localityName: string;
  /** Postcode for the locality. */
  postcode: string;
  /**
   * State in which the address belongs. Valid enumeration defined by Australia Post PAF code file
   * State Type Abbreviation. NSW, QLD, VIC, NT, WA, SA, TAS, ACT, AAT.
   */
  state: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pafSchema: Schema<Paf> = s.object<Paf>(
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
    postalDeliveryNumberSuffix: s.optional(s.string()),
    localityName: s.string(),
    postcode: s.string(),
    state: s.string(),
  },
  { additionalProperties: s.json() },
);
