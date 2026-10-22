import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { managedDeliveryType1Schema, type ManagedDeliveryType1 } from "./managed-delivery-type1.js";

export type ExplodeRequest = {
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
  /** The public ID of the PDF or animated image to generate from. */
  publicId: string;
  /** The format for the generated derived images. Default: png */
  format?: string;
  /** The transformation to apply. Must contain exactly one pg_all transformation parameter. */
  transformation: string;
  /** The webhook URL to notify when the operation is complete. */
  notificationUrl?: string;
  /** The delivery type of the asset. Default: upload */
  type?: ManagedDeliveryType1;
};

export const explodeRequestSchema: Schema<ExplodeRequest> = s.object<ExplodeRequest>({
  apiKey: s.optional(s.string()),
  timestamp: s.optional(s.int()),
  signature: s.optional(s.string()),
  publicId: s.string(),
  format: s.optional(s.string()),
  transformation: s.string(),
  notificationUrl: s.optional(s.string()),
  type: s.optional(s.lazy(() => managedDeliveryType1Schema)),
  _keysMap: {
    apiKey: "api_key",
    publicId: "public_id",
    notificationUrl: "notification_url",
  },
});
