import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { countryCode2Schema, type CountryCode2 } from "./country-code2.js";
import { Device1, device1Schema } from "./device1.js";
import { include6Schema, type Include6 } from "./include6.js";

export type AiModeMonitorRequest = {
  /** The prompt to send to AI Mode */
  prompt?: string;
  /** Country/region code for localized response, using ISO 3166-1 alpha-2 country codes. */
  country: CountryCode2;
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
   * Google canonical location name for geo-targeted results, in comma-separated format:
   * 'City,Region,Country' (see
   * https://developers.google.com/google-ads/api/reference/data/geotargets for all ~100,000
   * supported locations). Use alongside 'country' for city-level precision. Mutually exclusive with
   * 'uule' — provide one or the other, not both. When both `location` and `uule` are omitted, cloro
   * pins results to the country's canonical location (e.g. `Portugal` for `PT`) where it has one;
   * otherwise Google geolocates from the proxy's exit IP.
   */
  location?: string;
  /**
   * Pre-encoded Google UULE string for precise geo-targeting. Use this when you have a pre-built
   * UULE value instead of a location name. Mutually exclusive with 'location' — provide one or the
   * other, not both.
   */
  uule?: string;
  /** Device type for search results @default Device1.Desktop */
  device?: Device1;
  /** Optional flags for including additional response formats */
  include?: Include6;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const aiModeMonitorRequestProperties: s.Shape<AiModeMonitorRequest> = {
  prompt: s.optional(s.string()),
  country: countryCode2Schema,
  gl: s.optional(s.string()),
  hl: s.optional(s.string()),
  location: s.optional(s.string()),
  uule: s.optional(s.string()),
  device: s.defaulted(device1Schema, Device1.Desktop),
  include: s.optional(s.lazy(() => include6Schema)),
};

export const aiModeMonitorRequestInternalSchema: Schema<AiModeMonitorRequest> =
  s.object<AiModeMonitorRequest>(aiModeMonitorRequestProperties, { additionalProperties: s.json() });

export const aiModeMonitorRequestSchema: Schema<AiModeMonitorRequest> = s.lazySchema(() =>
  s.object<AiModeMonitorRequest>(
    {
      ...aiModeMonitorRequestProperties,
      prompt: s.optional(s.string().check(s.minLength(1), s.maxLength(10000))),
    },
    { additionalProperties: s.json() },
  ),
);
