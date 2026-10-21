import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { uploadDeliveryType1Schema, type UploadDeliveryType1 } from "./unions/upload-delivery-type1.js";

/**
 * Status information returned for in-progress chunked uploads. Note that fields that are not yet
 * determined or not known at the time of the call are omitted from the response.
 */
export type NonFinalChunkUploadResponse = {
  /** Whether the upload is complete. Will be false for all but the last chunk. */
  done: boolean;
  /** The total number of bytes uploaded so far. */
  bytes: number;
  /** The delivery type of the asset. Defaults to 'upload'. */
  kind?: UploadDeliveryType1;
  /**
   * The type of resource being uploaded (e.g., "image", "video", "raw"). May be omitted in early
   * chunks when using auto detection.
   */
  resourceType?: string;
  /**
   * The public ID assigned to the upload. May be omitted in early chunks if it will be
   * auto-generated upon completion.
   */
  publicId?: string;
};

export const nonFinalChunkUploadResponseSchema: Schema<NonFinalChunkUploadResponse> =
  s.object<NonFinalChunkUploadResponse>({
    done: s.boolean(),
    bytes: s.int(),
    kind: s.optional(s.lazy(() => uploadDeliveryType1Schema)),
    resourceType: s.optional(s.string()),
    publicId: s.optional(s.string()),
    _keysMap: {
      resourceType: "resource_type",
      publicId: "public_id",
    },
  });
