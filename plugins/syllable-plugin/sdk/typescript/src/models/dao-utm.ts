import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { utmCampaignSchema, type UtmCampaign } from "./unions/utm-campaign.js";
import { utmContentSchema, type UtmContent } from "./unions/utm-content.js";
import { utmMediumSchema, type UtmMedium } from "./unions/utm-medium.js";
import { utmSourceSchema, type UtmSource } from "./unions/utm-source.js";
import { utmTermSchema, type UtmTerm } from "./unions/utm-term.js";

export type DaoUtm = {
  utmSource?: UtmSource;
  utmMedium?: UtmMedium;
  utmCampaign?: UtmCampaign;
  utmTerm?: UtmTerm;
  utmContent?: UtmContent;
};

export const daoUtmSchema: Schema<DaoUtm> = s.object<DaoUtm>({
  utmSource: s.optional(s.lazy(() => utmSourceSchema)),
  utmMedium: s.optional(s.lazy(() => utmMediumSchema)),
  utmCampaign: s.optional(s.lazy(() => utmCampaignSchema)),
  utmTerm: s.optional(s.lazy(() => utmTermSchema)),
  utmContent: s.optional(s.lazy(() => utmContentSchema)),
  _keysMap: {
    utmSource: "utm_source",
    utmMedium: "utm_medium",
    utmCampaign: "utm_campaign",
    utmTerm: "utm_term",
    utmContent: "utm_content",
  },
});
