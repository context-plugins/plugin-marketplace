import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { attributionSchema, type Attribution } from "./unions/attribution.js";
import { basisSchema, type Basis } from "./unions/basis.js";
import { currencyVariantXduiylSchema, type CurrencyVariantXduiyl } from "./unions/currency-variant-xduiyl.js";
import { generatedAtSchema, type GeneratedAt } from "./unions/generated-at.js";
import { licenseSchema, type License } from "./unions/license.js";
import { polledSchema, type Polled } from "./unions/polled.js";
import { refreshSchema, type Refresh } from "./unions/refresh.js";
import { reportingLagSchema, type ReportingLag } from "./unions/reporting-lag.js";
import { sourceSchema, type Source } from "./unions/source.js";
import { versionSchema, type Version } from "./unions/version.js";

/**
 * Provenance of the slice that answered. `version` is the sync signal — poll it, re-pull when it
 * moves.
 */
export type DatasetStamp = {
  source?: Source;
  refresh?: Refresh;
  /** How often we LOOK for a new IRS release, as distinct from how often the IRS publishes one. */
  polled?: Polled;
  /** Why a figure is dated to a fiscal year rather than to today. */
  reportingLag?: ReportingLag;
  /**
   * Grants PAID versus grants approved — the reconciliation that catches people comparing a total
   * here to a funder's own published giving figure. Read it before filing a discrepancy.
   */
  basis?: Basis;
  /** Opaque build stamp of the data slice. Changes only when the data does. */
  version?: Version;
  /** ISO 8601 timestamp the slice was built. */
  generatedAt?: GeneratedAt;
  /**
   * Licence the source data is published under, where it carries one. Absent for public-domain
   * sources.
   */
  license?: License;
  /**
   * Attribution the source licence obliges you to reproduce. Present it verbatim wherever you show
   * figures from this jurisdiction.
   */
  attribution?: Attribution;
  /**
   * Currency of every amount in the response, when it is not US dollars. Amounts are never
   * converted — they are the filing's own figures.
   */
  currency?: CurrencyVariantXduiyl;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const datasetStampSchema: Schema<DatasetStamp> = s.object<DatasetStamp>(
  {
    source: s.optional(s.lazy(() => sourceSchema)),
    refresh: s.optional(s.lazy(() => refreshSchema)),
    polled: s.optional(s.lazy(() => polledSchema)),
    reportingLag: s.optional(s.lazy(() => reportingLagSchema)),
    basis: s.optional(s.lazy(() => basisSchema)),
    version: s.optional(s.lazy(() => versionSchema)),
    generatedAt: s.optional(s.lazy(() => generatedAtSchema)),
    license: s.optional(s.lazy(() => licenseSchema)),
    attribution: s.optional(s.lazy(() => attributionSchema)),
    currency: s.optional(s.lazy(() => currencyVariantXduiylSchema)),
    _keysMap: {
      reportingLag: "reporting_lag",
      generatedAt: "generated_at",
    },
  },
  { additionalProperties: s.json() },
);
