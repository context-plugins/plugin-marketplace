import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Webhook = {
  references?: Record<string, string>;
  guid: string;
  created: string;
  modified: string;
  modifiedBy: string;
  alerted: string;
  deactivated: string;
  isActive: boolean;
  isAlert: boolean;
  organizationGuid: string;
  groupGuid?: string;
  name: string;
  event: string;
  url: string;
  status?: string;
  oauthUrl?: string;
  clientId?: string;
  clientSecret?: string;
  fetchTags?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const webhookSchema: Schema<Webhook> = s.object<Webhook>(
  {
    references: s.optional(s.record(s.string(), s.string())),
    guid: s.string(),
    created: s.string(),
    modified: s.string(),
    modifiedBy: s.string(),
    alerted: s.string(),
    deactivated: s.string(),
    isActive: s.boolean(),
    isAlert: s.boolean(),
    organizationGuid: s.string(),
    groupGuid: s.optional(s.string()),
    name: s.string(),
    event: s.string(),
    url: s.string(),
    status: s.optional(s.string()),
    oauthUrl: s.optional(s.string()),
    clientId: s.optional(s.string()),
    clientSecret: s.optional(s.string()),
    fetchTags: s.optional(s.boolean()),
    _keysMap: {
      modifiedBy: "modified_by",
      isActive: "is_active",
      isAlert: "is_alert",
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
