import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** InstanceAttachment represents the installation of an environment onto an instance. */
export type GoogleCloudApigeeV1InstanceAttachment = {
  /** Output only. ID of the attachment. */
  name?: string;
  /** Output only. Time the attachment was created in milliseconds since epoch. */
  createdAt?: string;
  /** ID of the attached environment. */
  environment?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1InstanceAttachmentSchema: Schema<GoogleCloudApigeeV1InstanceAttachment> =
  s.object<GoogleCloudApigeeV1InstanceAttachment>(
    {
      name: s.optional(s.string()),
      createdAt: s.optional(s.string()),
      environment: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
