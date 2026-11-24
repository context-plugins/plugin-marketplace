import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1GoogleServiceAccountConfig3Schema,
  type GoogleCloudApihubV1GoogleServiceAccountConfig3,
} from "./google-cloud-apihub-v1-google-service-account-config3.js";
import { supportedAuthTypeSchema, type SupportedAuthType } from "./supported-auth-type.js";

/** AuthConfigTemplate represents the authentication template for a plugin. */
export type GoogleCloudApihubV1AuthConfigTemplate = {
  /** Required. The list of authentication types supported by the plugin. */
  supportedAuthTypes?: SupportedAuthType[];
  /**
   * Optional. The service account of the plugin hosting service. This service account should be
   * granted the required permissions on the Auth Config parameters provided while creating the
   * plugin instances corresponding to this plugin. For example, if the plugin instance auth config
   * requires a secret manager secret, the service account should be granted the
   * secretmanager.versions.access permission on the corresponding secret, if the plugin instance
   * auth config contains a service account, the service account should be granted the
   * iam.serviceAccounts.getAccessToken permission on the corresponding service account.
   */
  serviceAccount?: GoogleCloudApihubV1GoogleServiceAccountConfig3;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1AuthConfigTemplateSchema: Schema<GoogleCloudApihubV1AuthConfigTemplate> =
  s.object<GoogleCloudApihubV1AuthConfigTemplate>(
    {
      supportedAuthTypes: s.optional(s.array(s.lazy(() => supportedAuthTypeSchema))),
      serviceAccount: s.optional(s.lazy(() => googleCloudApihubV1GoogleServiceAccountConfig3Schema)),
    },
    { additionalProperties: s.json() },
  );
