import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Optional flags for including additional response formats */
export type Include2 = {
  /** Include a URL to the full HTML of the response @default false */
  html?: boolean;
  /** Include markdown-formatted response in the result @default false */
  markdown?: boolean;
  /** Include raw streaming response events @default false */
  rawResponse?: boolean;
};

export const include2Schema: Schema<Include2> = s.object<Include2>({
  html: s.defaulted(s.boolean(), false),
  markdown: s.defaulted(s.boolean(), false),
  rawResponse: s.defaulted(s.boolean(), false),
});
