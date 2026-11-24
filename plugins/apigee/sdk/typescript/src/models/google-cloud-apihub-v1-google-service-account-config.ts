import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Config for Google service account authentication. */
export type GoogleCloudApihubV1GoogleServiceAccountConfig = {
  /**
   * Required. The service account to be used for authenticating request. The
   * `iam.serviceAccounts.getAccessToken` permission should be granted on this service account to
   * the impersonator service account.
   */
  serviceAccount?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1GoogleServiceAccountConfigSchema: Schema<GoogleCloudApihubV1GoogleServiceAccountConfig> =
  s.object<GoogleCloudApihubV1GoogleServiceAccountConfig>(
    {
      serviceAccount: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
