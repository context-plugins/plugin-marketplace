import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { assetDeliveryTypeSchema, type AssetDeliveryType } from "../asset-delivery-type.js";
import { managedDeliveryTypeSchema, type ManagedDeliveryType } from "../managed-delivery-type.js";

/** The delivery type of the asset. Defaults to 'upload'. */
export type UploadDeliveryType1 = ManagedDeliveryType | AssetDeliveryType;

export const uploadDeliveryType1Schema: Schema<UploadDeliveryType1> = s.of<UploadDeliveryType1>(
  s.union([s.lazy(() => managedDeliveryTypeSchema), s.lazy(() => assetDeliveryTypeSchema)]),
);
