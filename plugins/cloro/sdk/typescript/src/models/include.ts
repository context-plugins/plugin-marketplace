import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Optional flags for including additional response formats */
export type Include = {
  /** Include markdown-formatted response in the result @default false */
  markdown?: boolean;
  /** Include HTML-formatted response in the result @default false */
  html?: boolean;
  /** Include raw streaming response events @default false */
  rawResponse?: boolean;
};

export const includeSchema: Schema<Include> = s.object<Include>({
  markdown: s.defaulted(s.boolean(), false),
  html: s.defaulted(s.boolean(), false),
  rawResponse: s.defaulted(s.boolean(), false),
});
