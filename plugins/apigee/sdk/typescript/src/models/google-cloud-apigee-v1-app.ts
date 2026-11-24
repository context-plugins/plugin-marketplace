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
import {
  googleCloudApigeeV1CredentialSchema,
  type GoogleCloudApigeeV1Credential,
} from "./google-cloud-apigee-v1-credential.js";

export type GoogleCloudApigeeV1App = {
  /** List of attributes. */
  attributes?: GoogleCloudApigeeV1Attribute[];
  /** Output only. Unix time when the app was created. */
  createdAt?: string;
  /** Output only. Last modified time as milliseconds since epoch. */
  lastModifiedAt?: string;
  /** Status of the credential. */
  status?: string;
  /** ID of the app. */
  appId?: string;
  /**
   * Duration, in milliseconds, of the consumer key that will be generated for the app. The default
   * value, -1, indicates an infinite validity period. Once set, the expiration can't be updated.
   * json key: keyExpiresIn
   */
  keyExpiresIn?: string;
  /** Name of the app. */
  name?: string;
  /** List of API products associated with the app. */
  apiProducts?: GoogleCloudApigeeV1ApiProductRef[];
  /**
   * Output only. Set of credentials for the app. Credentials are API key/secret pairs associated
   * with API products.
   */
  credentials?: GoogleCloudApigeeV1Credential[];
  /** ID of the developer. */
  developerId?: string;
  /**
   * Scopes to apply to the app. The specified scope names must already exist on the API product
   * that you associate with the app.
   */
  scopes?: string[];
  /** Name of the AppGroup */
  appGroup?: string;
  /** Name of the company that owns the app. */
  companyName?: string;
  /** Email of the developer. */
  developerEmail?: string;
  /**
   * Callback URL used by OAuth 2.0 authorization servers to communicate authorization codes back to
   * apps.
   */
  callbackUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1AppSchema: Schema<GoogleCloudApigeeV1App> = s.object<GoogleCloudApigeeV1App>(
  {
    attributes: s.optional(s.array(s.lazy(() => googleCloudApigeeV1AttributeSchema))),
    createdAt: s.optional(s.string()),
    lastModifiedAt: s.optional(s.string()),
    status: s.optional(s.string()),
    appId: s.optional(s.string()),
    keyExpiresIn: s.optional(s.string()),
    name: s.optional(s.string()),
    apiProducts: s.optional(s.array(s.lazy(() => googleCloudApigeeV1ApiProductRefSchema))),
    credentials: s.optional(s.array(s.lazy(() => googleCloudApigeeV1CredentialSchema))),
    developerId: s.optional(s.string()),
    scopes: s.optional(s.array(s.string())),
    appGroup: s.optional(s.string()),
    companyName: s.optional(s.string()),
    developerEmail: s.optional(s.string()),
    callbackUrl: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
