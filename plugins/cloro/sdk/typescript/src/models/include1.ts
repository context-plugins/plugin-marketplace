import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Optional flags for including additional response data */
export type Include1 = {
  /** Include raw HTML response from Google News @default false */
  html?: boolean;
};

export const include1Schema: Schema<Include1> = s.object<Include1>({
  html: s.defaulted(s.boolean(), false),
});
