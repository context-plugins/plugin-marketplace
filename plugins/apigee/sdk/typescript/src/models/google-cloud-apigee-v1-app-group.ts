import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1AttributeSchema,
  type GoogleCloudApigeeV1Attribute,
} from "./google-cloud-apigee-v1-attribute.js";

/**
 * AppGroup contains the request/response fields representing the logical grouping of apps. Note
 * that appgroup_id, create_time and update_time cannot be changed by the user, and gets updated by
 * the system. The name and the organization once provided cannot be edited subsequently.
 */
export type GoogleCloudApigeeV1AppGroup = {
  /**
   * Valid values are `active` or `inactive`. Note that the status of the AppGroup should be updated
   * via UpdateAppGroupRequest by setting the action as `active` or `inactive`.
   */
  status?: string;
  /** Output only. Created time as milliseconds since epoch. */
  createdAt?: string;
  /** A list of attributes */
  attributes?: GoogleCloudApigeeV1Attribute[];
  /** channel identifier identifies the owner maintaing this grouping. */
  channelId?: string;
  /** app group name displayed in the UI */
  displayName?: string;
  /** Optional. Email of the AppGroup. */
  email?: string;
  /** Immutable. the org the app group is created */
  organization?: string;
  /** Output only. Internal identifier that cannot be edited */
  appGroupId?: string;
  /**
   * Immutable. Name of the AppGroup. Characters you can use in the name are restricted to:
   * A-Z0-9._\-$ %.
   */
  name?: string;
  /** A reference to the associated storefront/marketplace. */
  channelUri?: string;
  /** Output only. Modified time as milliseconds since epoch. */
  lastModifiedAt?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1AppGroupSchema: Schema<GoogleCloudApigeeV1AppGroup> =
  s.object<GoogleCloudApigeeV1AppGroup>(
    {
      status: s.optional(s.string()),
      createdAt: s.optional(s.string()),
      attributes: s.optional(s.array(s.lazy(() => googleCloudApigeeV1AttributeSchema))),
      channelId: s.optional(s.string()),
      displayName: s.optional(s.string()),
      email: s.optional(s.string()),
      organization: s.optional(s.string()),
      appGroupId: s.optional(s.string()),
      name: s.optional(s.string()),
      channelUri: s.optional(s.string()),
      lastModifiedAt: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
