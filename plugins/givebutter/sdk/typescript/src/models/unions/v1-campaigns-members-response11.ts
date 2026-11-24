import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { campaignMemberResourceSchema, type CampaignMemberResource } from "../campaign-member-resource.js";

export type V1CampaignsMembersResponse11 = CampaignMemberResource | Record<string, unknown>;

export const v1CampaignsMembersResponse11Schema: Schema<V1CampaignsMembersResponse11> =
  s.of<V1CampaignsMembersResponse11>(
    s.union([s.lazy(() => campaignMemberResourceSchema), s.record(s.string(), s.unknown())]),
  );
