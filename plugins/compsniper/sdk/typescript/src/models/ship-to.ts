import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { CountryCode, countryCodeSchema } from "./country-code.js";

export type ShipTo = {
  /** @default CountryCode.Us */
  countryCode?: CountryCode;
  postalCode: string;
};

const shipToProperties: s.Shape<ShipTo> = {
  countryCode: s.defaulted(countryCodeSchema, CountryCode.Us),
  postalCode: s.string(),
};

export const shipToInternalSchema: Schema<ShipTo> = s.object<ShipTo>(shipToProperties);

export const shipToSchema: Schema<ShipTo> = s.lazySchema(() =>
  s.object<ShipTo>({
    ...shipToProperties,
    postalCode: s.string().check(s.pattern("^[0-9]{5}(-[0-9]{4})?$")),
  }),
);
