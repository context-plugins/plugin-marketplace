import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { resourceType1Schema, type ResourceType1 } from "./resource-type1.js";
import { uploadDeliveryType1Schema, type UploadDeliveryType1 } from "./unions/upload-delivery-type1.js";

/** Response returned when an upload is processed asynchronously (async=true) */
export type AsyncUploadResponse = {
  /**
   * The status of the asynchronous upload. Will be 'pending' for async uploads.
   *
   * @default "pending"
   */
  status?: "pending";
  /**
   * The type of resource being uploaded. This field may be omitted if resource_type is not known at
   * the time of the call.
   */
  resourceType?: ResourceType1;
  /** The delivery type of the asset. Defaults to 'upload'. */
  type: UploadDeliveryType1;
  /** The public ID assigned to the upload. May be omitted if it will be auto-generated. */
  publicId?: string;
  /** A unique identifier for the asynchronous upload job. */
  batchId: string;
  /**
   * The IP address of the requester. This is only included if a product environment has
   * requester_ip tracking enabled.
   */
  requesterIp?: string;
};

export const asyncUploadResponseSchema: Schema<AsyncUploadResponse> = s.object<AsyncUploadResponse>({
  status: s.defaulted(s.literal("pending"), "pending"),
  resourceType: s.optional(s.lazy(() => resourceType1Schema)),
  type: uploadDeliveryType1Schema,
  publicId: s.optional(s.string()),
  batchId: s.string(),
  requesterIp: s.optional(s.string()),
  _keysMap: {
    resourceType: "resource_type",
    publicId: "public_id",
    batchId: "batch_id",
    requesterIp: "requester_ip",
  },
});
