import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { audienceSchema, type Audience } from "./audience.js";

/** Request to trigger a campaign */
export type V1TriggerCampaignRequest = {
  /** Target audience for the campaign */
  audience?: Audience;
  /** Custom properties for personalization */
  properties?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1TriggerCampaignRequestSchema: Schema<V1TriggerCampaignRequest> =
  s.object<V1TriggerCampaignRequest>(
    {
      audience: s.optional(s.lazy(() => audienceSchema)),
      properties: s.optional(s.record(s.string(), s.unknown())),
    },
    { additionalProperties: s.json() },
  );
