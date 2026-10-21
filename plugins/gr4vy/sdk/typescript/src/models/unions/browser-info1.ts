import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { browserInfoSchema, type BrowserInfo } from "../browser-info.js";

/** Information about the browser used by the buyer. This can be used by anti-fraud services. */
export type BrowserInfo1 = BrowserInfo;

export const browserInfo1Schema: Schema<BrowserInfo1> = s.of<BrowserInfo1>(
  s.union([s.lazy(() => browserInfoSchema)]),
);
