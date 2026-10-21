import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { uploadDeliveryTypeSchema, type UploadDeliveryType } from "./unions/upload-delivery-type.js";

export type UploadTypeParameter = {
  /**
   * The delivery type that defines if and how the uploaded asset is available for public delivery.
   * By default, all uploaded assets are public (upload).
   */
  type?: UploadDeliveryType;
};

export const uploadTypeParameterSchema: Schema<UploadTypeParameter> = s.object<UploadTypeParameter>({
  type: s.optional(s.lazy(() => uploadDeliveryTypeSchema)),
});
