import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApihubV1RuntimeProjectAttachment1Schema,
  type GoogleCloudApihubV1RuntimeProjectAttachment1,
} from "./google-cloud-apihub-v1-runtime-project-attachment1.js";

/** The ListRuntimeProjectAttachments method's response. */
export type GoogleCloudApihubV1LookupRuntimeProjectAttachmentResponse = {
  /** Runtime project attachment for a project if exists, empty otherwise. */
  runtimeProjectAttachment?: GoogleCloudApihubV1RuntimeProjectAttachment1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1LookupRuntimeProjectAttachmentResponseSchema: Schema<GoogleCloudApihubV1LookupRuntimeProjectAttachmentResponse> =
  s.object<GoogleCloudApihubV1LookupRuntimeProjectAttachmentResponse>(
    {
      runtimeProjectAttachment: s.optional(s.lazy(() => googleCloudApihubV1RuntimeProjectAttachment1Schema)),
    },
    { additionalProperties: s.json() },
  );
