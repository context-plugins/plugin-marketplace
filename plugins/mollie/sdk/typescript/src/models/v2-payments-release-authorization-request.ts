import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type V2PaymentsReleaseAuthorizationRequest = {
  /**
   * The identifier referring to the [profile](get-profile) this entity belongs to.
   *
   * When using an API Key, the `profileId` must not be sent since it is linked to the key. However,
   * for OAuth and Organization tokens, the `profileId` is required.
   *
   * For more information, see [Authentication](authentication).
   */
  profileId?: string;
  /**
   * Whether to create the entity in test mode or live mode.
   *
   * Most API credentials are specifically created for either live mode or test mode, in which case
   * this parameter must not be sent. For organization-level credentials such as OAuth access
   * tokens, you can enable test mode by setting `testmode` to `true`.
   */
  testmode?: boolean | null;
};

export const v2PaymentsReleaseAuthorizationRequestSchema: Schema<V2PaymentsReleaseAuthorizationRequest> =
  s.object<V2PaymentsReleaseAuthorizationRequest>({
    profileId: s.optional(s.string()),
    testmode: s.optionalNullable(s.boolean()),
  });
