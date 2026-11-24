import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { campaignSettingResourceSchema, type CampaignSettingResource } from "./campaign-setting-resource.js";
import { eventResourceSchema, type EventResource } from "./event-resource.js";

export type CampaignResource = {
  id: string;
  code: string;
  accountId: string;
  eventId: string;
  type: string;
  title: string;
  subtitle: string;
  description: string;
  slug: string;
  url: string;
  goal: number | null;
  raised: number;
  donors: number;
  currency: string;
  cover: string;
  status: string;
  timezone: string;
  endAt: string;
  event?: EventResource;
  settings: CampaignSettingResource[];
  createdAt: string;
  updatedAt: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const campaignResourceSchema: Schema<CampaignResource> = s.object<CampaignResource>(
  {
    id: s.string(),
    code: s.string(),
    accountId: s.string(),
    eventId: s.string(),
    type: s.string(),
    title: s.string(),
    subtitle: s.string(),
    description: s.string(),
    slug: s.string(),
    url: s.string(),
    goal: s.nullable(s.int()),
    raised: s.float64(),
    donors: s.int(),
    currency: s.string(),
    cover: s.string(),
    status: s.string(),
    timezone: s.string(),
    endAt: s.string(),
    event: s.optional(s.lazy(() => eventResourceSchema)),
    settings: s.array(s.lazy(() => campaignSettingResourceSchema)),
    createdAt: s.string(),
    updatedAt: s.string(),
    _keysMap: {
      accountId: "account_id",
      eventId: "event_id",
      endAt: "end_at",
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
