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

/**
 * Response for [GetAppGroupApp].[AppGroupApps.GetAppGroupApp],
 * [CreateAppGroupAppRequest].[AppGroupApp.CreateAppGroupAppRequest] and
 * [DeleteAppGroupApp].[AppGroupApp.DeleteAppGroupApp]
 */
export type GoogleCloudApigeeV1AppGroupApp = {
  /** Status of the App. Valid values include `approved` or `revoked`. */
  status?: string;
  /** List of attributes for the AppGroup app. */
  attributes?: GoogleCloudApigeeV1Attribute[];
  /**
   * Immutable. Name of the AppGroup app whose resource name format is of syntax
   * (organizations/*&#47;appgroups/*&#47;apps/*).
   */
  name?: string;
  /**
   * Immutable. Expiration time, in seconds, for the consumer key that is generated for the AppGroup
   * app. If not set or left to the default value of `-1`, the API key never expires. The expiration
   * time can't be updated after it is set.
   */
  keyExpiresIn?: string;
  /**
   * Output only. Set of credentials for the AppGroup app consisting of the consumer key/secret
   * pairs associated with the API products.
   */
  credentials?: GoogleCloudApigeeV1Credential[];
  /** List of API products associated with the AppGroup app. */
  apiProducts?: string[];
  /** Output only. Time the AppGroup app was created in milliseconds since epoch. */
  createdAt?: string;
  /**
   * Scopes to apply to the AppGroup app. The specified scopes must already exist for the API
   * product that you associate with the AppGroup app.
   */
  scopes?: string[];
  /**
   * Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to
   * AppGroup apps.
   */
  callbackUrl?: string;
  /**
   * Immutable. Name of the parent AppGroup whose resource name format is of syntax
   * (organizations/*&#47;appgroups/*).
   */
  appGroup?: string;
  /** Output only. Time the AppGroup app was modified in milliseconds since epoch. */
  lastModifiedAt?: string;
  /** Immutable. ID of the AppGroup app. */
  appId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1AppGroupAppSchema: Schema<GoogleCloudApigeeV1AppGroupApp> =
  s.object<GoogleCloudApigeeV1AppGroupApp>(
    {
      status: s.optional(s.string()),
      attributes: s.optional(s.array(s.lazy(() => googleCloudApigeeV1AttributeSchema))),
      name: s.optional(s.string()),
      keyExpiresIn: s.optional(s.string()),
      credentials: s.optional(s.array(s.lazy(() => googleCloudApigeeV1CredentialSchema))),
      apiProducts: s.optional(s.array(s.string())),
      createdAt: s.optional(s.string()),
      scopes: s.optional(s.array(s.string())),
      callbackUrl: s.optional(s.string()),
      appGroup: s.optional(s.string()),
      lastModifiedAt: s.optional(s.string()),
      appId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
