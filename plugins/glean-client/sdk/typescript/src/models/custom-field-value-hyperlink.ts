import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CustomFieldValueHyperlink = {
  /** Anchor text for hyperlink. */
  urlAnchor?: string;
  /** Link for this URL. */
  urlLink?: string;
};

export const customFieldValueHyperlinkSchema: Schema<CustomFieldValueHyperlink> =
  s.object<CustomFieldValueHyperlink>({
    urlAnchor: s.optional(s.string()),
    urlLink: s.optional(s.string()),
  });
