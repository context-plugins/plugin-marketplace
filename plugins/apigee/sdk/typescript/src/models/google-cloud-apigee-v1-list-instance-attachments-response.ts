import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1InstanceAttachmentSchema,
  type GoogleCloudApigeeV1InstanceAttachment,
} from "./google-cloud-apigee-v1-instance-attachment.js";

/** Response for ListInstanceAttachments. */
export type GoogleCloudApigeeV1ListInstanceAttachmentsResponse = {
  /**
   * Page token that you can include in a ListInstanceAttachments request to retrieve the next page
   * of content. If omitted, no subsequent pages exist.
   */
  nextPageToken?: string;
  /** Attachments for the instance. */
  attachments?: GoogleCloudApigeeV1InstanceAttachment[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ListInstanceAttachmentsResponseSchema: Schema<GoogleCloudApigeeV1ListInstanceAttachmentsResponse> =
  s.object<GoogleCloudApigeeV1ListInstanceAttachmentsResponse>(
    {
      nextPageToken: s.optional(s.string()),
      attachments: s.optional(s.array(s.lazy(() => googleCloudApigeeV1InstanceAttachmentSchema))),
    },
    { additionalProperties: s.json() },
  );
