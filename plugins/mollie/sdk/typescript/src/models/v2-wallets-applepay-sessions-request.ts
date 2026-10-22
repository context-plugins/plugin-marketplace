import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V2WalletsApplepaySessionsRequest = {
  /**
   * The validationUrl you got from the [ApplePayValidateMerchant
   * event](https://developer.apple.com/documentation/apple_pay_on_the_web/applepayvalidatemerchantevent).
   *
   * A list of all [valid host
   * names](https://developer.apple.com/documentation/apple_pay_on_the_web/setting_up_your_server)
   * for merchant validation is available. You should white list these in your application and
   * reject any `validationUrl`s that have a host name not in the list.
   */
  validationUrl: string;
  /**
   * The domain of your web shop, that is visible in the browser's location bar. For example
   * `pay.myshop.com`.
   */
  domain: string;
  /**
   * The identifier referring to the [profile](get-profile) this entity belongs to.
   *
   * Most API credentials are linked to a single profile. In these cases the `profileId` must not be
   * sent in the creation request. For organization-level credentials such as OAuth access tokens
   * however, the `profileId` parameter is required.
   */
  profileId?: string;
};

export const v2WalletsApplepaySessionsRequestSchema: Schema<V2WalletsApplepaySessionsRequest> =
  s.object<V2WalletsApplepaySessionsRequest>({
    validationUrl: s.string(),
    domain: s.string(),
    profileId: s.optional(s.string()),
  });
