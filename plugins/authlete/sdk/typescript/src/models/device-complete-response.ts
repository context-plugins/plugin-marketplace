import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action22Schema, type Action22 } from "./action22.js";

export type DeviceCompleteResponse = {
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
  /** The next action that the authorization server implementation should take. */
  action?: Action22;
  /** the claims that the user has consented for the client application to know. */
  consentedClaims?: string[];
};

export const deviceCompleteResponseSchema: Schema<DeviceCompleteResponse> = s.object<DeviceCompleteResponse>({
  resultCode: s.optional(s.string()),
  resultMessage: s.optional(s.string()),
  action: s.optional(s.lazy(() => action22Schema)),
  consentedClaims: s.optional(s.array(s.string())),
});
