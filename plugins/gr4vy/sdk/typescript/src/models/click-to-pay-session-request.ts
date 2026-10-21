import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ClickToPaySessionRequest = {
  /** The checkout session ID to create a Click to Pay session for. */
  checkoutSessionId: string;
};

export const clickToPaySessionRequestSchema: Schema<ClickToPaySessionRequest> =
  s.object<ClickToPaySessionRequest>({
    checkoutSessionId: s.string(),
    _keysMap: {
      checkoutSessionId: "checkout_session_id",
    },
  });
