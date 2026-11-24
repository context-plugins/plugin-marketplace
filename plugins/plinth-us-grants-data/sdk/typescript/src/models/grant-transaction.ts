import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./unions/amount.js";
import { descriptionSchema, type Description } from "./unions/description.js";
import { fiscalYearSchema, type FiscalYear } from "./unions/fiscal-year.js";
import { funderNameSchema, type FunderName } from "./unions/funder-name.js";
import { recipCitySchema, type RecipCity } from "./unions/recip-city.js";
import { recipCountrySchema, type RecipCountry } from "./unions/recip-country.js";
import { recipEinSchema, type RecipEin } from "./unions/recip-ein.js";
import { recipNameSchema, type RecipName } from "./unions/recip-name.js";
import { recipStateSchema, type RecipState } from "./unions/recip-state.js";
import { recipZipSchema, type RecipZip } from "./unions/recip-zip.js";
import { subjectSchema, type Subject } from "./unions/subject.js";
import {
  xPlinthPlinthUsDataGrantsApiSchema,
  type XPlinthPlinthUsDataGrantsApi,
} from "./unions/xplinth-plinth-us-data-grants-api.js";

/**
 * One grant line as filed. `recip_ein` is null where we would not stake an EIN on the name.
 *
 * ⚠️ `recip_name` IS THE REGISTERED NAME WHERE THE EIN RESOLVED, not the string on the filing. The
 * projection is `coalesce(registered_name, as_filed)`, so a resolved row shows what the IRS calls
 * the organisation and an unresolved row shows what the filer typed. Reconciling a row back to its
 * source filing therefore needs `recip_ein` and the funder's return, not this field — an external
 * audit read the difference as a substitution specific to one `ein_source`, which is the shape it
 * presents, though it applies to every resolved row.
 */
export type GrantTransaction = {
  funderEin: string;
  funderName?: FunderName;
  recipEin?: RecipEin;
  recipName?: RecipName;
  recipCity?: RecipCity;
  recipState?: RecipState;
  recipZip?: RecipZip;
  recipCountry?: RecipCountry;
  amount?: Amount;
  /** Fiscal year of the FILING, not the payment date. */
  fiscalYear?: FiscalYear;
  subject?: Subject;
  description?: Description;
  xPlinth?: XPlinthPlinthUsDataGrantsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const grantTransactionSchema: Schema<GrantTransaction> = s.object<GrantTransaction>(
  {
    funderEin: s.string(),
    funderName: s.optional(s.lazy(() => funderNameSchema)),
    recipEin: s.optional(s.lazy(() => recipEinSchema)),
    recipName: s.optional(s.lazy(() => recipNameSchema)),
    recipCity: s.optional(s.lazy(() => recipCitySchema)),
    recipState: s.optional(s.lazy(() => recipStateSchema)),
    recipZip: s.optional(s.lazy(() => recipZipSchema)),
    recipCountry: s.optional(s.lazy(() => recipCountrySchema)),
    amount: s.optional(s.lazy(() => amountSchema)),
    fiscalYear: s.optional(s.lazy(() => fiscalYearSchema)),
    subject: s.optional(s.lazy(() => subjectSchema)),
    description: s.optional(s.lazy(() => descriptionSchema)),
    xPlinth: s.optional(s.lazy(() => xPlinthPlinthUsDataGrantsApiSchema)),
    _keysMap: {
      funderEin: "funder_ein",
      funderName: "funder_name",
      recipEin: "recip_ein",
      recipName: "recip_name",
      recipCity: "recip_city",
      recipState: "recip_state",
      recipZip: "recip_zip",
      recipCountry: "recip_country",
      fiscalYear: "fiscal_year",
      xPlinth: "x_plinth",
    },
  },
  { additionalProperties: s.json() },
);
