import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1RuntimeProjectAttachmentSchema,
  type GoogleCloudApihubV1RuntimeProjectAttachment,
} from "./google-cloud-apihub-v1-runtime-project-attachment.js";

/** The ListRuntimeProjectAttachments method's response. */
export type GoogleCloudApihubV1ListRuntimeProjectAttachmentsResponse = {
  /**
   * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** List of runtime project attachments. */
  runtimeProjectAttachments?: GoogleCloudApihubV1RuntimeProjectAttachment[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1ListRuntimeProjectAttachmentsResponseSchema: Schema<GoogleCloudApihubV1ListRuntimeProjectAttachmentsResponse> =
  s.object<GoogleCloudApihubV1ListRuntimeProjectAttachmentsResponse>(
    {
      nextPageToken: s.optional(s.string()),
      runtimeProjectAttachments: s.optional(
        s.array(s.lazy(() => googleCloudApihubV1RuntimeProjectAttachmentSchema)),
      ),
    },
    { additionalProperties: s.json() },
  );
