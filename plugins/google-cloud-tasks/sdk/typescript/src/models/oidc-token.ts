import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Contains information needed for generating an [OpenID Connect
 * token](https://developers.google.com/identity/protocols/OpenIDConnect). This type of
 * authorization can be used for many scenarios, including calling Cloud Run, or endpoints where you
 * intend to validate the token yourself.
 */
export type OidcToken = {
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

export const oidcTokenSchema: Schema<OidcToken> = s.object<OidcToken>(
  {
    audience: s.optional(s.string()),
    serviceAccountEmail: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
