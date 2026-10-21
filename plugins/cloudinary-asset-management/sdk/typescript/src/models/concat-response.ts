import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { resourceType2Schema, type ResourceType2 } from "./resource-type2.js";

/** Response returned when a concat job is accepted. */
export type ConcatResponse = {
  /** The status of the concat job. Always 'processing'. @default "processing" */
  status?: "processing";
  /**
   * Identifier shared by all chunked-upload parts produced for this concat job (sent as the
   * `X-Unique-Upload-Id` header on each `/video/upload_chunked` request).
   */
  uniqueUploadId: string;
  /** The public ID assigned to the concatenated asset, if one was supplied in the request. */
  publicId?: string;
  /** Always 'video' — concat produces an MP4. */
  resourceType?: ResourceType2;
};

export const concatResponseSchema: Schema<ConcatResponse> = s.object<ConcatResponse>({
  status: s.defaulted(s.literal("processing"), "processing"),
  uniqueUploadId: s.string(),
  publicId: s.optional(s.string()),
  resourceType: s.optional(s.lazy(() => resourceType2Schema)),
  _keysMap: {
    uniqueUploadId: "unique_upload_id",
    publicId: "public_id",
    resourceType: "resource_type",
  },
});
