import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { uploadDeliveryTypeSchema, type UploadDeliveryType } from "./unions/upload-delivery-type.js";

/** The rename request parameters. */
export type RenameRequest = {
  /**
   * The API key to use for the request. This is automatically computed by the Cloudinary's SDKs.
   */
  apiKey?: string;
  /**
   * The timestamp to use for the request in unix time. This is automatically computed by the
   * Cloudinary's SDKs.
   */
  timestamp?: number;
  /**
   * (Required for signed REST API calls) Used to authenticate the request and based on the
   * parameters you use in the request. When using the Cloudinary SDKs for signed requests, the
   * signature is automatically generated and added to the request. If you manually generate your
   * own signed POST request, you need to manually generate the signature parameter and add it to
   * the request together with the api_key and timestamp parameters.
   */
  signature?: string;
  /** The public ID of the asset to rename. */
  fromPublicId: string;
  /** The new public ID for the asset. */
  toPublicId: string;
  /** The current delivery type of the asset. */
  type?: UploadDeliveryType;
  /**
   * The target delivery type for the renamed asset. If omitted, the delivery type remains
   * unchanged.
   */
  toType?: UploadDeliveryType;
  /**
   * Whether to overwrite the target asset if it already exists. Default is false.
   *
   * @default false
   */
  overwrite?: boolean;
  /**
   * Whether to invalidate CDN cache copies of the renamed asset. Default is false.
   *
   * @default false
   */
  invalidate?: boolean;
  /** Whether to include contextual metadata in the response. Default is false. @default false */
  context?: boolean;
  /** Whether to include structured metadata in the response. Default is false. @default false */
  metadata?: boolean;
  /** URL to notify when the operation is complete. */
  notificationUrl?: string;
};

export const renameRequestSchema: Schema<RenameRequest> = s.object<RenameRequest>({
  apiKey: s.optional(s.string()),
  timestamp: s.optional(s.int()),
  signature: s.optional(s.string()),
  fromPublicId: s.string(),
  toPublicId: s.string(),
  type: s.optional(s.lazy(() => uploadDeliveryTypeSchema)),
  toType: s.optional(s.lazy(() => uploadDeliveryTypeSchema)),
  overwrite: s.defaulted(s.boolean(), false),
  invalidate: s.defaulted(s.boolean(), false),
  context: s.defaulted(s.boolean(), false),
  metadata: s.defaulted(s.boolean(), false),
  notificationUrl: s.optional(s.string()),
  _keysMap: {
    apiKey: "api_key",
    fromPublicId: "from_public_id",
    toPublicId: "to_public_id",
    toType: "to_type",
    notificationUrl: "notification_url",
  },
});
