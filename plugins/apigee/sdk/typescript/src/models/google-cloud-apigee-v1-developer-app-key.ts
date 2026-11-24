import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1AttributeSchema,
  type GoogleCloudApigeeV1Attribute,
} from "./google-cloud-apigee-v1-attribute.js";

export type GoogleCloudApigeeV1DeveloperAppKey = {
  /**
   * Input only. Expiration time, in seconds, for the consumer key. If not set or left to the
   * default value of `-1`, the API key never expires. The expiration time can't be updated after it
   * is set.
   */
  expiresInSeconds?: string;
  /** Status of the credential. Valid values include `approved` or `revoked`. */
  status?: string;
  /** Consumer key. */
  consumerKey?: string;
  /** Time the developer app was created in milliseconds since epoch. */
  issuedAt?: string;
  /**
   * Scopes to apply to the app. The specified scope names must already be defined for the API
   * product that you associate with the app.
   */
  scopes?: string[];
  /**
   * List of API products for which the credential can be used. **Note**: Do not specify the list of
   * API products when creating a consumer key and secret for a developer app. Instead, use the
   * UpdateDeveloperAppKey API to make the association after the consumer key and secret are
   * created.
   */
  apiProducts?: Record<string, unknown>[];
  /** Time the developer app expires in milliseconds since epoch. */
  expiresAt?: string;
  /** Secret key. */
  consumerSecret?: string;
  /** List of attributes associated with the credential. */
  attributes?: GoogleCloudApigeeV1Attribute[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1DeveloperAppKeySchema: Schema<GoogleCloudApigeeV1DeveloperAppKey> =
  s.object<GoogleCloudApigeeV1DeveloperAppKey>(
    {
      expiresInSeconds: s.optional(s.string()),
      status: s.optional(s.string()),
      consumerKey: s.optional(s.string()),
      issuedAt: s.optional(s.string()),
      scopes: s.optional(s.array(s.string())),
      apiProducts: s.optional(s.array(s.record(s.string(), s.unknown()))),
      expiresAt: s.optional(s.string()),
      consumerSecret: s.optional(s.string()),
      attributes: s.optional(s.array(s.lazy(() => googleCloudApigeeV1AttributeSchema))),
    },
    { additionalProperties: s.json() },
  );
