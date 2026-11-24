import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Response containing the trigger ID */
export type V1TriggerCampaignResponse = {
  /** Unique identifier for this campaign trigger */
  triggerId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1TriggerCampaignResponseSchema: Schema<V1TriggerCampaignResponse> =
  s.object<V1TriggerCampaignResponse>(
    {
      triggerId: s.optional(s.string()),
      _keysMap: {
        triggerId: "trigger_id",
      },
    },
    { additionalProperties: s.json() },
  );
