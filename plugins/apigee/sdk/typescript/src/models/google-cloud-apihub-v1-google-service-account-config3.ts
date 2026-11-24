import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Optional. The service account of the plugin hosting service. This service account should be
 * granted the required permissions on the Auth Config parameters provided while creating the plugin
 * instances corresponding to this plugin. For example, if the plugin instance auth config requires
 * a secret manager secret, the service account should be granted the secretmanager.versions.access
 * permission on the corresponding secret, if the plugin instance auth config contains a service
 * account, the service account should be granted the iam.serviceAccounts.getAccessToken permission
 * on the corresponding service account.
 */
export type GoogleCloudApihubV1GoogleServiceAccountConfig3 = {
  /**
   * Required. The service account to be used for authenticating request. The
   * `iam.serviceAccounts.getAccessToken` permission should be granted on this service account to
   * the impersonator service account.
   */
  serviceAccount?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1GoogleServiceAccountConfig3Schema: Schema<GoogleCloudApihubV1GoogleServiceAccountConfig3> =
  s.object<GoogleCloudApihubV1GoogleServiceAccountConfig3>(
    {
      serviceAccount: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
