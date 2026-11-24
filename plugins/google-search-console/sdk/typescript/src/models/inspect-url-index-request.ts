import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Index inspection request. */
export type InspectUrlIndexRequest = {
  /**
   * Required. The URL of the property as defined in Search Console. **Examples:**
   * `http://www.example.com/` for a URL-prefix property, or `sc-domain:example.com` for a Domain
   * property.
   */
  siteUrl?: string;
  /**
   * Optional. An [IETF BCP-47](https://en.wikipedia.org/wiki/IETF_language_tag) language code
   * representing the requested language for translated issue messages, e.g. "en-US", "or "de-CH".
   * Default value is "en-US".
   */
  languageCode?: string;
  /** Required. URL to inspect. Must be under the property specified in "site_url". */
  inspectionUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const inspectUrlIndexRequestSchema: Schema<InspectUrlIndexRequest> = s.object<InspectUrlIndexRequest>(
  {
    siteUrl: s.optional(s.string()),
    languageCode: s.optional(s.string()),
    inspectionUrl: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
