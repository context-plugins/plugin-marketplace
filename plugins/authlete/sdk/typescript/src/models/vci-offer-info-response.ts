import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action35Schema, type Action35 } from "./action35.js";
import { credentialOfferInfoSchema, type CredentialOfferInfo } from "./credential-offer-info.js";

export type VciOfferInfoResponse = {
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
  /** The result of the `/vci/offer/info` API call. */
  action?: Action35;
  info?: CredentialOfferInfo;
};

export const vciOfferInfoResponseSchema: Schema<VciOfferInfoResponse> = s.object<VciOfferInfoResponse>({
  resultCode: s.optional(s.string()),
  resultMessage: s.optional(s.string()),
  action: s.optional(s.lazy(() => action35Schema)),
  info: s.optional(s.lazy(() => credentialOfferInfoSchema)),
});
