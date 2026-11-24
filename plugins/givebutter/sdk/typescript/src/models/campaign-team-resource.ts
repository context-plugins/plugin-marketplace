import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CampaignTeamResource = {
  id: string;
  name: string;
  logo: string;
  slug: string;
  url: string;
  raised: number;
  goal: number;
  supporters: number;
  members: number;
  createdAt: string;
  updatedAt: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const campaignTeamResourceSchema: Schema<CampaignTeamResource> = s.object<CampaignTeamResource>(
  {
    id: s.string(),
    name: s.string(),
    logo: s.string(),
    slug: s.string(),
    url: s.string(),
    raised: s.float64(),
    goal: s.float64(),
    supporters: s.int(),
    members: s.int(),
    createdAt: s.string(),
    updatedAt: s.string(),
    _keysMap: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
