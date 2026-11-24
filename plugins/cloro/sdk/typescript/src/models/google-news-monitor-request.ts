import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { countryCode1Schema, type CountryCode1 } from "./country-code1.js";
import { Device, deviceSchema } from "./device.js";
import { include1Schema, type Include1 } from "./include1.js";

export type GoogleNewsMonitorRequest = {
  /** The search query to execute on Google News */
  query?: string;
  /**
   * ISO 3166-1 alpha-2 country code for localized news results. See [List of
   * countries](/api-reference/endpoint/countries) for the codes each provider supports.
   */
  country: CountryCode1;
  /**
   * Alternative to `country`, using Google's own parameter name for the result geography. Same ISO
   * 3166-1 alpha-2 codes, accepted in either case (`us` or `US`), and must be a country the
   * endpoint supports — see `GET /v1/countries`. Provide `country` or `gl`; sending both with
   * different values is a `400`.
   */
  gl?: string;
  /**
   * Interface language, as Google's own `hl` parameter (e.g. `en`, `de`, `pt-BR`). Free-form and
   * case-insensitive — Google owns the list of codes. Overrides the language cloro derives from the
   * country, so the interface language and the result geography can differ.
   */
  hl?: string;
  /**
   * Device the search is run from. 'desktop' returns the desktop news SERP; 'ios' (Safari on
   * iPhone), 'android' (Chrome on Android) and 'mobile' (alias for 'android') all return the mobile
   * news SERP.
   *
   * @default Device.Desktop
   */
  device?: Device;
  /**
   * Number of news results pages to scrape (1-10). Paid add-on: +2 credits per page after the first
   * ([pricing](/guides/providers#google-search-multi-page-pricing)).
   *
   * @default 1
   */
  pages?: number;
  /** Optional flags for including additional response data */
  include?: Include1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const googleNewsMonitorRequestProperties: s.Shape<GoogleNewsMonitorRequest> = {
  query: s.optional(s.string()),
  country: countryCode1Schema,
  gl: s.optional(s.string()),
  hl: s.optional(s.string()),
  device: s.defaulted(deviceSchema, Device.Desktop),
  pages: s.defaulted(s.int(), 1),
  include: s.optional(s.lazy(() => include1Schema)),
};

export const googleNewsMonitorRequestInternalSchema: Schema<GoogleNewsMonitorRequest> =
  s.object<GoogleNewsMonitorRequest>(googleNewsMonitorRequestProperties, { additionalProperties: s.json() });

export const googleNewsMonitorRequestSchema: Schema<GoogleNewsMonitorRequest> = s.lazySchema(() =>
  s.object<GoogleNewsMonitorRequest>(
    {
      ...googleNewsMonitorRequestProperties,
      query: s.optional(s.string().check(s.minLength(1), s.maxLength(10000))),
      pages: s.defaulted(s.int().check(s.gte(1), s.lte(10)), 1),
    },
    { additionalProperties: s.json() },
  ),
);
