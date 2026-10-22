import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { assetDeliveryTypeSchema, type AssetDeliveryType } from "../asset-delivery-type.js";
import { managedDeliveryTypeSchema, type ManagedDeliveryType } from "../managed-delivery-type.js";

/** Delivery types accepted by upload and rename operations. */
export type UploadDeliveryType = ManagedDeliveryType | AssetDeliveryType;

export const uploadDeliveryTypeSchema: Schema<UploadDeliveryType> = s.of<UploadDeliveryType>(
  s.union([s.lazy(() => managedDeliveryTypeSchema), s.lazy(() => assetDeliveryTypeSchema)]),
);
