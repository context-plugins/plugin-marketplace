import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * If specified, an [OAuth token](https://developers.google.com/identity/protocols/OAuth2) will be
 * generated and attached as an `Authorization` header in the HTTP request. This type of
 * authorization should generally only be used when calling Google APIs hosted on *.googleapis.com.
 */
export type OAuthToken3 = {
  /**
   * [Service account email](https://cloud.google.com/iam/docs/service-accounts) to be used for
   * generating OAuth token. The service account must be within the same project as the queue. The
   * caller must have iam.serviceAccounts.actAs permission for the service account.
   */
  serviceAccountEmail?: string;
  /**
   * OAuth scope to be used for generating OAuth access token. If not specified,
   * "https://www.googleapis.com/auth/cloud-platform" will be used.
   */
  scope?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oAuthToken3Schema: Schema<OAuthToken3> = s.object<OAuthToken3>(
  {
    serviceAccountEmail: s.optional(s.string()),
    scope: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
