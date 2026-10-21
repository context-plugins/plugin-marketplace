import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Twilio-side A2P setup state for the number.
 *
 * Reflects Twilio configuration (Messaging Service + Brand + Campaign records); it is not carrier
 * per-number REGISTERED state or legal/content compliance.
 */
export type A2PMessagingPathCheckResponse = {
  /**
   * True when the number is on a Messaging Service with a US A2P registration whose brand is
   * approved and campaign is verified on the same registration.
   */
  a2PApproved: boolean;
};

export const a2PMessagingPathCheckResponseSchema: Schema<A2PMessagingPathCheckResponse> =
  s.object<A2PMessagingPathCheckResponse>({
    a2PApproved: s.boolean(),
    _keysMap: {
      a2PApproved: "a2p_approved",
    },
  });
