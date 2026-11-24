import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { firstFiscalYearSchema, type FirstFiscalYear } from "./unions/first-fiscal-year.js";
import { funderCountSchema, type FunderCount } from "./unions/funder-count.js";
import { grantCountSchema, type GrantCount } from "./unions/grant-count.js";
import { lastFiscalYearSchema, type LastFiscalYear } from "./unions/last-fiscal-year.js";
import { recipCitySchema, type RecipCity } from "./unions/recip-city.js";
import { recipCountrySchema, type RecipCountry } from "./unions/recip-country.js";
import { recipEinSchema, type RecipEin } from "./unions/recip-ein.js";
import { recipNameSchema, type RecipName } from "./unions/recip-name.js";
import { recipStateSchema, type RecipState } from "./unions/recip-state.js";
import { recipZipSchema, type RecipZip } from "./unions/recip-zip.js";
import { totalAmountSchema, type TotalAmount } from "./unions/total-amount.js";

export type RecipientAggregate = {
  recipEin?: RecipEin;
  recipName?: RecipName;
  recipCity?: RecipCity;
  recipState?: RecipState;
  recipZip?: RecipZip;
  recipCountry?: RecipCountry;
  totalAmount?: TotalAmount;
  grantCount?: GrantCount;
  funderCount?: FunderCount;
  firstFiscalYear?: FirstFiscalYear;
  lastFiscalYear?: LastFiscalYear;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const recipientAggregateSchema: Schema<RecipientAggregate> = s.object<RecipientAggregate>(
  {
    recipEin: s.optional(s.lazy(() => recipEinSchema)),
    recipName: s.optional(s.lazy(() => recipNameSchema)),
    recipCity: s.optional(s.lazy(() => recipCitySchema)),
    recipState: s.optional(s.lazy(() => recipStateSchema)),
    recipZip: s.optional(s.lazy(() => recipZipSchema)),
    recipCountry: s.optional(s.lazy(() => recipCountrySchema)),
    totalAmount: s.optional(s.lazy(() => totalAmountSchema)),
    grantCount: s.optional(s.lazy(() => grantCountSchema)),
    funderCount: s.optional(s.lazy(() => funderCountSchema)),
    firstFiscalYear: s.optional(s.lazy(() => firstFiscalYearSchema)),
    lastFiscalYear: s.optional(s.lazy(() => lastFiscalYearSchema)),
    _keysMap: {
      recipEin: "recip_ein",
      recipName: "recip_name",
      recipCity: "recip_city",
      recipState: "recip_state",
      recipZip: "recip_zip",
      recipCountry: "recip_country",
      totalAmount: "total_amount",
      grantCount: "grant_count",
      funderCount: "funder_count",
      firstFiscalYear: "first_fiscal_year",
      lastFiscalYear: "last_fiscal_year",
    },
  },
  { additionalProperties: s.json() },
);
