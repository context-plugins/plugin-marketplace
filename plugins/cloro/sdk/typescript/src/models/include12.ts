import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Optional flags for including additional response formats */
export type Include12 = {
  /** Include a URL to the full HTML of the page that Bing rendered @default false */
  html?: boolean;
  /**
   * Include the answer formatted in Markdown in the result. `result.markdown` is returned only when
   * this is `true`.
   *
   * @default false
   */
  markdown?: boolean;
};

export const include12Schema: Schema<Include12> = s.object<Include12>({
  html: s.defaulted(s.boolean(), false),
  markdown: s.defaulted(s.boolean(), false),
});
