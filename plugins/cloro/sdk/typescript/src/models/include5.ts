import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Optional flags for including additional response formats */
export type Include5 = {
  /** Include a URL to the full HTML of the response @default false */
  html?: boolean;
  /** Include markdown-formatted response in the result @default false */
  markdown?: boolean;
  /**
   * Include ChatGPT's raw response payload. Paid add-on: one flat +2 credits covers any combination
   * of `rawResponse`, `searchQueries`, `ads` and `shopping`
   * ([pricing](/guides/providers#chatgpt-additional-features)).
   *
   * @default false
   */
  rawResponse?: boolean;
  /**
   * Include the query fan-out ChatGPT used to generate the response. Paid add-on: one flat +2
   * credits covers any combination of `rawResponse`, `searchQueries`, `ads` and `shopping`
   * ([pricing](/guides/providers#chatgpt-additional-features)).
   *
   * @default false
   */
  searchQueries?: boolean;
  /**
   * Include ads displayed in ChatGPT response. Paid add-on: one flat +2 credits covers any
   * combination of `rawResponse`, `searchQueries`, `ads` and `shopping`
   * ([pricing](/guides/providers#chatgpt-additional-features)).
   *
   * @default false
   */
  ads?: boolean;
  /**
   * Include shopping cards and inline products with pricing and offers. Paid add-on: one flat +2
   * credits covers any combination of `rawResponse`, `searchQueries`, `ads` and `shopping`
   * ([pricing](/guides/providers#chatgpt-additional-features)).
   *
   * @default false
   */
  shopping?: boolean;
};

export const include5Schema: Schema<Include5> = s.object<Include5>({
  html: s.defaulted(s.boolean(), false),
  markdown: s.defaulted(s.boolean(), false),
  rawResponse: s.defaulted(s.boolean(), false),
  searchQueries: s.defaulted(s.boolean(), false),
  ads: s.defaulted(s.boolean(), false),
  shopping: s.defaulted(s.boolean(), false),
});
