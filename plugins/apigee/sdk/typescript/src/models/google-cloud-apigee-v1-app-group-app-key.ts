import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1ApiProductAssociationSchema,
  type GoogleCloudApigeeV1ApiProductAssociation,
} from "./google-cloud-apigee-v1-api-product-association.js";
import {
  googleCloudApigeeV1AttributeSchema,
  type GoogleCloudApigeeV1Attribute,
} from "./google-cloud-apigee-v1-attribute.js";

/** AppGroupAppKey contains all the information associated with the credentials. */
export type GoogleCloudApigeeV1AppGroupAppKey = {
  /**
   * Immutable. Expiration time, in seconds, for the consumer key. If not set or left to the default
   * value of `-1`, the API key never expires. The expiration time can't be updated after it is set.
   */
  expiresInSeconds?: string;
  /** Output only. Time the AppGroup app was created in milliseconds since epoch. */
  issuedAt?: string;
  /** List of attributes associated with the credential. */
  attributes?: GoogleCloudApigeeV1Attribute[];
  /** Status of the credential. Valid values include `approved` or `revoked`. */
  status?: string;
  /** Secret key. */
  consumerSecret?: string;
  /**
   * Output only. List of API products and its status for which the credential can be used.
   * **Note**: Use UpdateAppGroupAppKeyApiProductRequest API to make the association after the
   * consumer key and secret are created.
   */
  apiProducts?: GoogleCloudApigeeV1ApiProductAssociation[];
  /** Immutable. Consumer key. */
  consumerKey?: string;
  /**
   * Scopes to apply to the app. The specified scope names must already be defined for the API
   * product that you associate with the app.
   */
  scopes?: string[];
  /** Output only. Time the AppGroup app expires in milliseconds since epoch. */
  expiresAt?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1AppGroupAppKeySchema: Schema<GoogleCloudApigeeV1AppGroupAppKey> =
  s.object<GoogleCloudApigeeV1AppGroupAppKey>(
    {
      expiresInSeconds: s.optional(s.string()),
      issuedAt: s.optional(s.string()),
      attributes: s.optional(s.array(s.lazy(() => googleCloudApigeeV1AttributeSchema))),
      status: s.optional(s.string()),
      consumerSecret: s.optional(s.string()),
      apiProducts: s.optional(s.array(s.lazy(() => googleCloudApigeeV1ApiProductAssociationSchema))),
      consumerKey: s.optional(s.string()),
      scopes: s.optional(s.array(s.string())),
      expiresAt: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
