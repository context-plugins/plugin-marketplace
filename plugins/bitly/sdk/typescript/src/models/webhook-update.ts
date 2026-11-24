import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WebhookUpdate = {
  guid: string;
  isActive?: boolean;
  organizationGuid?: string;
  groupGuid?: string;
  name?: string;
  event?: string;
  url?: string;
  oauthUrl?: string;
  clientId?: string;
  clientSecret?: string;
  fetchTags?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const webhookUpdateSchema: Schema<WebhookUpdate> = s.object<WebhookUpdate>(
  {
    guid: s.string(),
    isActive: s.optional(s.boolean()),
    organizationGuid: s.optional(s.string()),
    groupGuid: s.optional(s.string()),
    name: s.optional(s.string()),
    event: s.optional(s.string()),
    url: s.optional(s.string()),
    oauthUrl: s.optional(s.string()),
    clientId: s.optional(s.string()),
    clientSecret: s.optional(s.string()),
    fetchTags: s.optional(s.boolean()),
    _keysMap: {
      isActive: "is_active",
      organizationGuid: "organization_guid",
      groupGuid: "group_guid",
      oauthUrl: "oauth_url",
      clientId: "client_id",
      clientSecret: "client_secret",
      fetchTags: "fetch_tags",
    },
  },
  { additionalProperties: s.json() },
);
