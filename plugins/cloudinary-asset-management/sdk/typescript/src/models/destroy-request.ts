import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { deliveryTypeAll1Schema, type DeliveryTypeAll1 } from "./unions/delivery-type-all1.js";

export type DestroyRequest = {
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
  /** The public ID of the asset to destroy. */
  publicId: string;
  /** All supported delivery types. */
  type?: DeliveryTypeAll1;
  /** Whether to invalidate CDN cached copies of the asset. @default false */
  invalidate?: boolean;
  /** URL to receive a notification when the operation is complete. */
  notificationUrl?: string;
};

export const destroyRequestSchema: Schema<DestroyRequest> = s.object<DestroyRequest>({
  apiKey: s.optional(s.string()),
  timestamp: s.optional(s.int()),
  signature: s.optional(s.string()),
  publicId: s.string(),
  type: s.optional(s.lazy(() => deliveryTypeAll1Schema)),
  invalidate: s.defaulted(s.boolean(), false),
  notificationUrl: s.optional(s.string()),
  _keysMap: {
    apiKey: "api_key",
    publicId: "public_id",
    notificationUrl: "notification_url",
  },
});
