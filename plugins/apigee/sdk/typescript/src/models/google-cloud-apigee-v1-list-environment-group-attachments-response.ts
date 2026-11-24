import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1EnvironmentGroupAttachmentSchema,
  type GoogleCloudApigeeV1EnvironmentGroupAttachment,
} from "./google-cloud-apigee-v1-environment-group-attachment.js";

/** Response for ListEnvironmentGroupAttachments. */
export type GoogleCloudApigeeV1ListEnvironmentGroupAttachmentsResponse = {
  /**
   * Page token that you can include in a ListEnvironmentGroupAttachments request to retrieve the
   * next page. If omitted, no subsequent pages exist.
   */
  nextPageToken?: string;
  /** EnvironmentGroupAttachments for the specified environment group. */
  environmentGroupAttachments?: GoogleCloudApigeeV1EnvironmentGroupAttachment[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ListEnvironmentGroupAttachmentsResponseSchema: Schema<GoogleCloudApigeeV1ListEnvironmentGroupAttachmentsResponse> =
  s.object<GoogleCloudApigeeV1ListEnvironmentGroupAttachmentsResponse>(
    {
      nextPageToken: s.optional(s.string()),
      environmentGroupAttachments: s.optional(
        s.array(s.lazy(() => googleCloudApigeeV1EnvironmentGroupAttachmentSchema)),
      ),
    },
    { additionalProperties: s.json() },
  );
