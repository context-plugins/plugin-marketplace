import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV2NumbersPurchaseRequest1 = {
  /** DID ID from numbers_index, numbers_purchase_create */
  id?: number;
  /** Identity ID to associate with the number, from identities_index, identities_create */
  identityId?: number;
  /** Enable or disable inbound call recording for this DID */
  callRecordingEnabled?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2NumbersPurchaseRequest1Schema: Schema<ApiV2NumbersPurchaseRequest1> =
  s.object<ApiV2NumbersPurchaseRequest1>(
    {
      id: s.optional(s.int()),
      identityId: s.optional(s.int()),
      callRecordingEnabled: s.optional(s.boolean()),
      _keysMap: {
        identityId: "identity_id",
        callRecordingEnabled: "call_recording_enabled",
      },
    },
    { additionalProperties: s.json() },
  );
