import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1AttributeSchema,
  type GoogleCloudApigeeV1Attribute,
} from "./google-cloud-apigee-v1-attribute.js";
import {
  googleCloudApigeeV1CredentialSchema,
  type GoogleCloudApigeeV1Credential,
} from "./google-cloud-apigee-v1-credential.js";

export type GoogleCloudApigeeV1DeveloperApp = {
  /** Output only. Time the developer app was modified in milliseconds since epoch. */
  lastModifiedAt?: string;
  /**
   * Scopes to apply to the developer app. The specified scopes must already exist for the API
   * product that you associate with the developer app.
   */
  scopes?: string[];
  /** Output only. Time the developer app was created in milliseconds since epoch. */
  createdAt?: string;
  /**
   * Expiration time, in milliseconds, for the consumer key that is generated for the developer app.
   * If not set or left to the default value of `-1`, the API key never expires. The expiration time
   * can't be updated after it is set.
   */
  keyExpiresIn?: string;
  /**
   * ID of the developer app. This ID is not user specified but is automatically generated on app
   * creation. appId is a UUID.
   */
  appId?: string;
  /** List of attributes for the developer app. */
  attributes?: GoogleCloudApigeeV1Attribute[];
  /** Developer app family. */
  appFamily?: string;
  /**
   * Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to
   * developer apps.
   */
  callbackUrl?: string;
  /**
   * Output only. Set of credentials for the developer app consisting of the consumer key/secret
   * pairs associated with the API products.
   */
  credentials?: GoogleCloudApigeeV1Credential[];
  /** ID of the developer. */
  developerId?: string;
  /** Name of the developer app. */
  name?: string;
  /** List of API products associated with the developer app. */
  apiProducts?: string[];
  /** Status of the credential. Valid values include `approved` or `revoked`. */
  status?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1DeveloperAppSchema: Schema<GoogleCloudApigeeV1DeveloperApp> =
  s.object<GoogleCloudApigeeV1DeveloperApp>(
    {
      lastModifiedAt: s.optional(s.string()),
      scopes: s.optional(s.array(s.string())),
      createdAt: s.optional(s.string()),
      keyExpiresIn: s.optional(s.string()),
      appId: s.optional(s.string()),
      attributes: s.optional(s.array(s.lazy(() => googleCloudApigeeV1AttributeSchema))),
      appFamily: s.optional(s.string()),
      callbackUrl: s.optional(s.string()),
      credentials: s.optional(s.array(s.lazy(() => googleCloudApigeeV1CredentialSchema))),
      developerId: s.optional(s.string()),
      name: s.optional(s.string()),
      apiProducts: s.optional(s.array(s.string())),
      status: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
