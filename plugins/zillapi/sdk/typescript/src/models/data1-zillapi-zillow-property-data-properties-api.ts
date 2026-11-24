import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Data1ZillapiZillowPropertyDataPropertiesApi = {
  zestimate?: number | null;
  rentZestimate?: number | null;
  taxAssessedValue?: number | null;
  lastSoldPrice?: number | null;
  currency?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const data1ZillapiZillowPropertyDataPropertiesApiSchema: Schema<Data1ZillapiZillowPropertyDataPropertiesApi> =
  s.object<Data1ZillapiZillowPropertyDataPropertiesApi>(
    {
      zestimate: s.optionalNullable(s.float64()),
      rentZestimate: s.optionalNullable(s.float64()),
      taxAssessedValue: s.optionalNullable(s.float64()),
      lastSoldPrice: s.optionalNullable(s.float64()),
      currency: s.optional(s.string()),
      _keysMap: {
        rentZestimate: "rent_zestimate",
        taxAssessedValue: "tax_assessed_value",
        lastSoldPrice: "last_sold_price",
      },
    },
    { additionalProperties: s.json() },
  );
