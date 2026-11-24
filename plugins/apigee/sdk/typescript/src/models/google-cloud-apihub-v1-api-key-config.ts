import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1Secret2Schema,
  type GoogleCloudApihubV1Secret2,
} from "./google-cloud-apihub-v1-secret2.js";
import { httpElementLocationSchema, type HttpElementLocation } from "./http-element-location.js";

/** Config for authentication with API key. */
export type GoogleCloudApihubV1ApiKeyConfig = {
  /** Required. The location of the API key. The default value is QUERY. */
  httpElementLocation?: HttpElementLocation;
  /**
   * Required. The name of the SecretManager secret version resource storing the API key. Format:
   * `projects/{project}/secrets/{secrete}/versions/{version}`. The `secretmanager.versions.access`
   * permission should be granted to the service account accessing the secret.
   */
  apiKey?: GoogleCloudApihubV1Secret2;
  /**
   * Required. The parameter name of the API key. E.g. If the API request is
   * "https://example.com/act?api_key=", "api_key" would be the parameter name.
   */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1ApiKeyConfigSchema: Schema<GoogleCloudApihubV1ApiKeyConfig> =
  s.object<GoogleCloudApihubV1ApiKeyConfig>(
    {
      httpElementLocation: s.optional(s.lazy(() => httpElementLocationSchema)),
      apiKey: s.optional(s.lazy(() => googleCloudApihubV1Secret2Schema)),
      name: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
