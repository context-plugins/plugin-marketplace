import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CampaignMemberResource = {
  id: string;
  firstName: string;
  lastName: string;
  displayName: string;
  email: string;
  phone: string;
  picture: string;
  raised: number;
  goal: number;
  donors: number;
  items: number;
  url: string;
  createdAt: string;
  updatedAt: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const campaignMemberResourceSchema: Schema<CampaignMemberResource> = s.object<CampaignMemberResource>(
  {
    id: s.string(),
    firstName: s.string(),
    lastName: s.string(),
    displayName: s.string(),
    email: s.string(),
    phone: s.string(),
    picture: s.string(),
    raised: s.float64(),
    goal: s.int(),
    donors: s.int(),
    items: s.int(),
    url: s.string(),
    createdAt: s.string(),
    updatedAt: s.string(),
    _keysMap: {
      firstName: "first_name",
      lastName: "last_name",
      displayName: "display_name",
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
