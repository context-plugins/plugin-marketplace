import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1EndpointAttachmentSchema,
  type GoogleCloudApigeeV1EndpointAttachment,
} from "./google-cloud-apigee-v1-endpoint-attachment.js";

/** Response for ListEndpointAttachments method. */
export type GoogleCloudApigeeV1ListEndpointAttachmentsResponse = {
  /**
   * Page token that you can include in an `ListEndpointAttachments` request to retrieve the next
   * page. If omitted, no subsequent pages exist.
   */
  nextPageToken?: string;
  /** Endpoint attachments in the specified organization. */
  endpointAttachments?: GoogleCloudApigeeV1EndpointAttachment[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ListEndpointAttachmentsResponseSchema: Schema<GoogleCloudApigeeV1ListEndpointAttachmentsResponse> =
  s.object<GoogleCloudApigeeV1ListEndpointAttachmentsResponse>(
    {
      nextPageToken: s.optional(s.string()),
      endpointAttachments: s.optional(s.array(s.lazy(() => googleCloudApigeeV1EndpointAttachmentSchema))),
    },
    { additionalProperties: s.json() },
  );
