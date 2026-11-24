import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { countrySchema, type Country } from "./country.js";
import { currencySchema, type Currency } from "./currency.js";
import { kindSchema, type Kind } from "./kind.js";

export type Result1 = {
  ein?: string;
  name?: string;
  /** Human-readable kind: Grantmaking foundation or Nonprofit. */
  type?: string;
  kind?: Kind;
  /**
   * Two-letter postal code as filed: a US state, or a province or territory when `country` is `CA`.
   */
  state?: string | null;
  /**
   * The SAME value as `state`, under the name the first consumers of this endpoint used. Kept
   * because it is in live clients; prefer `state` in new code.
   */
  location?: string | null;
  /**
   * NTEE major-group label. Null wherever the BMF carries no NTEE code, which is common — parse
   * permissively.
   */
  cause?: string | null;
  /** URL slug for the organization's page. Null for organizations without a curated page. */
  slug?: string | null;
  /**
   * Site-relative path to that page. `url` is the same target, absolute; prefer it outside this
   * domain.
   */
  href?: string | null;
  /** The register the row came from. Present on every row, so no result is currency-ambiguous. */
  country?: Country;
  /**
   * The currency `revenue` is in — the filing's own. Nothing in this dataset is converted, so
   * figures from the two registers are never comparable and never additive.
   */
  currency?: Currency;
  /**
   * Total revenue from the latest filing held, in the currency named by `currency`. Here to
   * disambiguate similarly-named organizations, and it gently weights the ranking; not a financial
   * figure to cite — use /essentials or /premier for that.
   */
  revenue?: number | null;
  /**
   * Match strength; results are already ordered by it. Null on an exact-EIN lookup, which has no
   * relevance score.
   */
  score?: number | null;
  /** Absolute canonical URL of the organization's page — stable, and citable. */
  url?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const result1Properties: s.Shape<Result1> = {
  ein: s.optional(s.string()),
  name: s.optional(s.string()),
  type: s.optional(s.string()),
  kind: s.optional(s.lazy(() => kindSchema)),
  state: s.optionalNullable(s.string()),
  location: s.optionalNullable(s.string()),
  cause: s.optionalNullable(s.string()),
  slug: s.optionalNullable(s.string()),
  href: s.optionalNullable(s.string()),
  country: s.optional(s.lazy(() => countrySchema)),
  currency: s.optional(s.lazy(() => currencySchema)),
  revenue: s.optionalNullable(s.int()),
  score: s.optionalNullable(s.float64()),
  url: s.optional(s.string()),
};

export const result1InternalSchema: Schema<Result1> = s.object<Result1>(result1Properties, {
  additionalProperties: s.json(),
});

export const result1Schema: Schema<Result1> = s.lazySchema(() =>
  s.object<Result1>(
    {
      ...result1Properties,
      url: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
