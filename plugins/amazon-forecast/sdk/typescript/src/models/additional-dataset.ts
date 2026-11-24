import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AdditionalDataset = {
  /** The name of the additional dataset. Valid names: "holiday" and "weather". */
  name: string;
  /**
   * Weather Index To enable the Weather Index, do not specify a value for Configuration. Holidays
   * Holidays To enable Holidays, set CountryCode to one of the following two-letter country codes:
   * "AL" - ALBANIA "AR" - ARGENTINA "AT" - AUSTRIA "AU" - AUSTRALIA "BA" - BOSNIA HERZEGOVINA "BE"
   * - BELGIUM "BG" - BULGARIA "BO" - BOLIVIA "BR" - BRAZIL "BY" - BELARUS "CA" - CANADA "CL" -
   * CHILE "CO" - COLOMBIA "CR" - COSTA RICA "HR" - CROATIA "CZ" - CZECH REPUBLIC "DK" - DENMARK
   * "EC" - ECUADOR "EE" - ESTONIA "ET" - ETHIOPIA "FI" - FINLAND "FR" - FRANCE "DE" - GERMANY "GR"
   * - GREECE "HU" - HUNGARY "IS" - ICELAND
   */
  configuration?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const additionalDatasetSchema: Schema<AdditionalDataset> = s.object<AdditionalDataset>(
  {
    name: s.string(),
    configuration: s.optional(s.record(s.string(), s.unknown())),
    _keysMap: {
      name: "Name",
      configuration: "Configuration",
    },
  },
  { additionalProperties: s.json() },
);
