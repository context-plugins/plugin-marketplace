import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type HypertextField = {
  /** Anchor text for the hypertext field. */
  anchor?: string;
  /** URL for the hypertext field. */
  hyperlink?: string;
};

export const hypertextFieldSchema: Schema<HypertextField> = s.object<HypertextField>({
  anchor: s.optional(s.string()),
  hyperlink: s.optional(s.string()),
});
