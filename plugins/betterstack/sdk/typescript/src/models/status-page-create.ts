import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type StatusPageCreate = {
  companyName: string;
  companyUrl: string;
  contactUrl?: string;
  logoUrl?: string;
  timezone?: string;
  subdomain: string;
  customDomain?: string;
  announcement?: string;
  announcementEmbedVisible?: boolean;
  history?: number;
  passwordEnabled?: boolean;
  password?: string;
  googleAnalyticsId?: string;
  minIncidentLength?: number;
  subscribable?: boolean;
  hideFromSearchEngines?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const statusPageCreateProperties: s.Shape<StatusPageCreate> = {
  companyName: s.string(),
  companyUrl: s.string(),
  contactUrl: s.optional(s.string()),
  logoUrl: s.optional(s.string()),
  timezone: s.optional(s.string()),
  subdomain: s.string(),
  customDomain: s.optional(s.string()),
  announcement: s.optional(s.string()),
  announcementEmbedVisible: s.optional(s.boolean()),
  history: s.optional(s.int()),
  passwordEnabled: s.optional(s.boolean()),
  password: s.optional(s.string()),
  googleAnalyticsId: s.optional(s.string()),
  minIncidentLength: s.optional(s.int()),
  subscribable: s.optional(s.boolean()),
  hideFromSearchEngines: s.optional(s.boolean()),
  _keysMap: {
    companyName: "company_name",
    companyUrl: "company_url",
    contactUrl: "contact_url",
    logoUrl: "logo_url",
    customDomain: "custom_domain",
    announcementEmbedVisible: "announcement_embed_visible",
    passwordEnabled: "password_enabled",
    googleAnalyticsId: "google_analytics_id",
    minIncidentLength: "min_incident_length",
    hideFromSearchEngines: "hide_from_search_engines",
  },
};

export const statusPageCreateInternalSchema: Schema<StatusPageCreate> = s.object<StatusPageCreate>(
  statusPageCreateProperties,
  { additionalProperties: s.json() },
);

export const statusPageCreateSchema: Schema<StatusPageCreate> = s.lazySchema(() =>
  s.object<StatusPageCreate>(
    {
      ...statusPageCreateProperties,
      companyUrl: s.string().check(s.url()),
      contactUrl: s.optional(s.string().check(s.url())),
      logoUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
