import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { wmxSiteSchema, type WmxSite } from "./wmx-site.js";

/** List of sites with access level information. */
export type SitesListResponse = {
  /**
   * Contains permission level information about a Search Console site. For more information, see
   * [Permissions in Search Console](https://support.google.com/webmasters/answer/2451999).
   */
  siteEntry?: WmxSite[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sitesListResponseSchema: Schema<SitesListResponse> = s.object<SitesListResponse>(
  {
    siteEntry: s.optional(s.array(s.lazy(() => wmxSiteSchema))),
  },
  { additionalProperties: s.json() },
);
