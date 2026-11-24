import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { CountryCode, countryCodeSchema } from "./country-code.js";

export type ShipFrom = {
  /** @default CountryCode.Us */
  countryCode?: CountryCode;
  postalCode: string;
};

const shipFromProperties: s.Shape<ShipFrom> = {
  countryCode: s.defaulted(countryCodeSchema, CountryCode.Us),
  postalCode: s.string(),
};

export const shipFromInternalSchema: Schema<ShipFrom> = s.object<ShipFrom>(shipFromProperties);

export const shipFromSchema: Schema<ShipFrom> = s.lazySchema(() =>
  s.object<ShipFrom>({
    ...shipFromProperties,
    postalCode: s.string().check(s.pattern("^[0-9]{5}(-[0-9]{4})?$")),
  }),
);
