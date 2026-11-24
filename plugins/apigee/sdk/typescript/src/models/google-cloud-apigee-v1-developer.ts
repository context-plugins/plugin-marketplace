import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1AttributeSchema,
  type GoogleCloudApigeeV1Attribute,
} from "./google-cloud-apigee-v1-attribute.js";

export type GoogleCloudApigeeV1Developer = {
  /** Required. User name of the developer. Not used by Apigee hybrid. */
  userName?: string;
  /**
   * Required. Email address of the developer. This value is used to uniquely identify the developer
   * in Apigee hybrid. Note that the email address has to be in lowercase only.
   */
  email?: string;
  /** Access type. */
  accessType?: string;
  /** Output only. Time at which the developer was last modified in milliseconds since epoch. */
  lastModifiedAt?: string;
  /** Output only. Time at which the developer was created in milliseconds since epoch. */
  createdAt?: string;
  /** Required. First name of the developer. */
  firstName?: string;
  /** Output only. Name of the Apigee organization in which the developer resides. */
  organizationName?: string;
  /**
   * ID of the developer. **Note**: IDs are generated internally by Apigee and are not guaranteed to
   * stay the same over time.
   */
  developerId?: string;
  /** List of companies associated with the developer. */
  companies?: string[];
  /** Developer app family. */
  appFamily?: string;
  /** Optional. Developer attributes (name/value pairs). The custom attribute limit is 18. */
  attributes?: GoogleCloudApigeeV1Attribute[];
  /** Output only. Status of the developer. Valid values are `active` and `inactive`. */
  status?: string;
  /** Required. Last name of the developer. */
  lastName?: string;
  /** List of apps associated with the developer. */
  apps?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1DeveloperSchema: Schema<GoogleCloudApigeeV1Developer> =
  s.object<GoogleCloudApigeeV1Developer>(
    {
      userName: s.optional(s.string()),
      email: s.optional(s.string()),
      accessType: s.optional(s.string()),
      lastModifiedAt: s.optional(s.string()),
      createdAt: s.optional(s.string()),
      firstName: s.optional(s.string()),
      organizationName: s.optional(s.string()),
      developerId: s.optional(s.string()),
      companies: s.optional(s.array(s.string())),
      appFamily: s.optional(s.string()),
      attributes: s.optional(s.array(s.lazy(() => googleCloudApigeeV1AttributeSchema))),
      status: s.optional(s.string()),
      lastName: s.optional(s.string()),
      apps: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
