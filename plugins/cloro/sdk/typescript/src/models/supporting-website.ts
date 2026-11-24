import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SupportingWebsite = {
  /** Website title */
  title?: string;
  /** Website URL */
  url?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const supportingWebsiteSchema: Schema<SupportingWebsite> = s.object<SupportingWebsite>(
  {
    title: s.optional(s.string()),
    url: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
