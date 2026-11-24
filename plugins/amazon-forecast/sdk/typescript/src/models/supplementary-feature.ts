import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SupplementaryFeature = {
  /** The name of the feature. Valid values: "holiday" and "weather". */
  name: string;
  /**
   * Weather Index To enable the Weather Index, set the value to "true" Holidays To enable Holidays,
   * specify a country with one of the following two-letter country codes: "AL" - ALBANIA "AR" -
   * ARGENTINA "AT" - AUSTRIA "AU" - AUSTRALIA "BA" - BOSNIA HERZEGOVINA "BE" - BELGIUM "BG" -
   * BULGARIA "BO" - BOLIVIA "BR" - BRAZIL "BY" - BELARUS "CA" - CANADA "CL" - CHILE "CO" - COLOMBIA
   * "CR" - COSTA RICA "HR" - CROATIA "CZ" - CZECH REPUBLIC "DK" - DENMARK "EC" - ECUADOR "EE" -
   * ESTONIA "ET" - ETHIOPIA "FI" - FINLAND "FR" - FRANCE "DE" - GERMANY "GR" - GREECE "HU" -
   * HUNGARY "IS" - ICELAND "IN" - INDIA "IE" - IR
   */
  value: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const supplementaryFeatureSchema: Schema<SupplementaryFeature> = s.object<SupplementaryFeature>(
  {
    name: s.string(),
    value: s.string(),
    _keysMap: {
      name: "Name",
      value: "Value",
    },
  },
  { additionalProperties: s.json() },
);
