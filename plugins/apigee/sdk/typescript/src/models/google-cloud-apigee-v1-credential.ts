import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1ApiProductRefSchema,
  type GoogleCloudApigeeV1ApiProductRef,
} from "./google-cloud-apigee-v1-api-product-ref.js";
import {
  googleCloudApigeeV1AttributeSchema,
  type GoogleCloudApigeeV1Attribute,
} from "./google-cloud-apigee-v1-attribute.js";

export type GoogleCloudApigeeV1Credential = {
  /** List of attributes associated with this credential. */
  attributes?: GoogleCloudApigeeV1Attribute[];
  /** Time the credential will expire in milliseconds since epoch. */
  expiresAt?: string;
  /** List of API products this credential can be used for. */
  apiProducts?: GoogleCloudApigeeV1ApiProductRef[];
  /** Secret key. */
  consumerSecret?: string;
  /** Time the credential was issued in milliseconds since epoch. */
  issuedAt?: string;
  /**
   * List of scopes to apply to the app. Specified scopes must already exist on the API product that
   * you associate with the app.
   */
  scopes?: string[];
  /** Status of the credential. Valid values include `approved` or `revoked`. */
  status?: string;
  /** Consumer key. */
  consumerKey?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1CredentialSchema: Schema<GoogleCloudApigeeV1Credential> =
  s.object<GoogleCloudApigeeV1Credential>(
    {
      attributes: s.optional(s.array(s.lazy(() => googleCloudApigeeV1AttributeSchema))),
      expiresAt: s.optional(s.string()),
      apiProducts: s.optional(s.array(s.lazy(() => googleCloudApigeeV1ApiProductRefSchema))),
      consumerSecret: s.optional(s.string()),
      issuedAt: s.optional(s.string()),
      scopes: s.optional(s.array(s.string())),
      status: s.optional(s.string()),
      consumerKey: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
