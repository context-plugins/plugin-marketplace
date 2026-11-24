import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * If specified, an [OIDC](https://developers.google.com/identity/protocols/OpenIDConnect) token
 * will be generated and attached as an `Authorization` header in the HTTP request. This type of
 * authorization can be used for many scenarios, including calling Cloud Run, or endpoints where you
 * intend to validate the token yourself.
 */
export type OidcToken3 = {
  /**
   * Audience to be used when generating OIDC token. If not specified, the URI specified in target
   * will be used.
   */
  audience?: string;
  /**
   * [Service account email](https://cloud.google.com/iam/docs/service-accounts) to be used for
   * generating OIDC token. The service account must be within the same project as the queue. The
   * caller must have iam.serviceAccounts.actAs permission for the service account.
   */
  serviceAccountEmail?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oidcToken3Schema: Schema<OidcToken3> = s.object<OidcToken3>(
  {
    audience: s.optional(s.string()),
    serviceAccountEmail: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
