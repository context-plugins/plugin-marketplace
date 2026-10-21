import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action34Schema, type Action34 } from "./action34.js";
import { credentialOfferInfoSchema, type CredentialOfferInfo } from "./credential-offer-info.js";

export type VciOfferCreateResponse = {
  /** The code which represents the result of the API call. */
  resultCode?: string;
  /** A short message which explains the result of the API call. */
  resultMessage?: string;
  /** The result of the `/vci/offer/create` API call. */
  action?: Action34;
  info?: CredentialOfferInfo;
};

export const vciOfferCreateResponseSchema: Schema<VciOfferCreateResponse> = s.object<VciOfferCreateResponse>({
  resultCode: s.optional(s.string()),
  resultMessage: s.optional(s.string()),
  action: s.optional(s.lazy(() => action34Schema)),
  info: s.optional(s.lazy(() => credentialOfferInfoSchema)),
});
