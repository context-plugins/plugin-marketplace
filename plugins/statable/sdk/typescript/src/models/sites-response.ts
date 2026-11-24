import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { siteSummarySchema, type SiteSummary } from "./site-summary.js";

export type SitesResponse = {
  sites: SiteSummary[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sitesResponseSchema: Schema<SitesResponse> = s.object<SitesResponse>(
  {
    sites: s.array(s.lazy(() => siteSummarySchema)),
  },
  { additionalProperties: s.json() },
);
