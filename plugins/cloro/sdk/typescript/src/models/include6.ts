import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Optional flags for including additional response formats */
export type Include6 = {
  /** Include a URL to the full HTML of the response @default false */
  html?: boolean;
  /** Include markdown-formatted response in the result @default false */
  markdown?: boolean;
  /**
   * Fetch merchant offers for the product clusters in the response and return them as
   * 'result.productResults'. Clusters are deduplicated across shopping cards and inline products,
   * and expansion covers at most 6 per scrape. Paid add-on: +1 credit per cluster returned, up to
   * +6 ([pricing](/guides/providers#ai-mode-additional-features)). Off by default.
   *
   * @default false
   */
  expandProducts?: boolean;
  /**
   * Ignored since 8th September 2026. Every redirect link now ships as `redirectLink` beside its
   * destination, so both are returned without this flag. Requests still sending it behave as if it
   * were absent.
   *
   * @deprecated
   *
   * @default false
   */
  googleGoto?: boolean;
};

export const include6Schema: Schema<Include6> = s.object<Include6>({
  html: s.defaulted(s.boolean(), false),
  markdown: s.defaulted(s.boolean(), false),
  expandProducts: s.defaulted(s.boolean(), false),
  googleGoto: s.defaulted(s.boolean(), false),
});
