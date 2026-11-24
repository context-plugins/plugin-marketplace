import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Google Service Account. */
export type GoogleCloudApihubV1GoogleServiceAccountConfig1 = {
  /**
   * Required. The service account to be used for authenticating request. The
   * `iam.serviceAccounts.getAccessToken` permission should be granted on this service account to
   * the impersonator service account.
   */
  serviceAccount?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1GoogleServiceAccountConfig1Schema: Schema<GoogleCloudApihubV1GoogleServiceAccountConfig1> =
  s.object<GoogleCloudApihubV1GoogleServiceAccountConfig1>(
    {
      serviceAccount: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
