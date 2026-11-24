import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CampaignCalendarRequest = {
  /** Campaign type, e.g. journey. */
  type?: string;
  state?: string;
  folderId?: string;
  q?: string;
  sortOrder?: string;
  limit?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const campaignCalendarRequestSchema: Schema<CampaignCalendarRequest> =
  s.object<CampaignCalendarRequest>(
    {
      type: s.optional(s.string()),
      state: s.optional(s.string()),
      folderId: s.optional(s.string()),
      q: s.optional(s.string()),
      sortOrder: s.optional(s.string()),
      limit: s.optional(s.int()),
      _keysMap: {
        folderId: "folder_id",
        sortOrder: "sort_order",
      },
    },
    { additionalProperties: s.json() },
  );
