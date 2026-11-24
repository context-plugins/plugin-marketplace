import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Optional flags for including additional response formats */
export type Include9 = {
  /** Include a URL to the full HTML of the response @default false */
  html?: boolean;
  /**
   * Include markdown-formatted response in the result. `result.markdown` is returned only when this
   * is `true`.
   *
   * @default false
   */
  markdown?: boolean;
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

export const include9Schema: Schema<Include9> = s.object<Include9>({
  html: s.defaulted(s.boolean(), false),
  markdown: s.defaulted(s.boolean(), false),
  googleGoto: s.defaulted(s.boolean(), false),
});
