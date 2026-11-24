import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { aioverview1Schema, type Aioverview1 } from "./aioverview1.js";

/** Optional flags for including additional response data */
export type Include7 = {
  /** Include raw HTML response from Google search @default false */
  html?: boolean;
  /**
   * Include Google AI Overview in the response. Paid add-on: one flat +2 credits covers
   * `aioverview` and `paaAioverview`, alone or together
   * ([pricing](/guides/providers#google-search-multi-page-pricing)).
   */
  aioverview?: Aioverview1;
  /**
   * Hydrate AI-Overview-type People Also Ask items with markdown content and sources. Paid add-on:
   * one flat +2 credits covers `aioverview` and `paaAioverview`, alone or together
   * ([pricing](/guides/providers#google-search-multi-page-pricing)). Each hydrated item adds one
   * scraper fetch (typically 1-2 per page), so responses take longer.
   *
   * @default false
   */
  paaAioverview?: boolean;
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

export const include7Schema: Schema<Include7> = s.object<Include7>({
  html: s.defaulted(s.boolean(), false),
  aioverview: s.optional(s.lazy(() => aioverview1Schema)),
  paaAioverview: s.defaulted(s.boolean(), false),
  googleGoto: s.defaulted(s.boolean(), false),
});
