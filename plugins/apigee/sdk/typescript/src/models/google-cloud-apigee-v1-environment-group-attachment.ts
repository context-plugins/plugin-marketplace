import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * EnvironmentGroupAttachment is a resource which defines an attachment of an environment to an
 * environment group.
 */
export type GoogleCloudApigeeV1EnvironmentGroupAttachment = {
  /**
   * Output only. The time at which the environment group attachment was created as milliseconds
   * since epoch.
   */
  createdAt?: string;
  /** ID of the environment group attachment. */
  name?: string;
  /** Output only. ID of the environment group. */
  environmentGroupId?: string;
  /** Required. ID of the attached environment. */
  environment?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1EnvironmentGroupAttachmentSchema: Schema<GoogleCloudApigeeV1EnvironmentGroupAttachment> =
  s.object<GoogleCloudApigeeV1EnvironmentGroupAttachment>(
    {
      createdAt: s.optional(s.string()),
      name: s.optional(s.string()),
      environmentGroupId: s.optional(s.string()),
      environment: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
