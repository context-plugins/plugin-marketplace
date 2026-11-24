import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  v1CampaignsMembersResponseInternalSchema,
  v1CampaignsMembersResponseSchema,
  type V1CampaignsMembersResponse,
} from "../v1-campaigns-members-response.js";

export type V1CampaignsMembersResponse1 = V1CampaignsMembersResponse | Record<string, unknown>;

export const v1CampaignsMembersResponse1InternalSchema: Schema<V1CampaignsMembersResponse1> =
  s.of<V1CampaignsMembersResponse1>(
    s.union([s.lazy(() => v1CampaignsMembersResponseInternalSchema), s.record(s.string(), s.unknown())]),
  );

export const v1CampaignsMembersResponse1Schema: Schema<V1CampaignsMembersResponse1> = s.lazySchema(() =>
  s.of<V1CampaignsMembersResponse1>(
    s.union([s.lazy(() => v1CampaignsMembersResponseSchema), s.record(s.string(), s.unknown())]),
  ),
);
