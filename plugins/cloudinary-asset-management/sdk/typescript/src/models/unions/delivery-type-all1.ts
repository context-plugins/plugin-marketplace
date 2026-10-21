import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { assetDeliveryTypeSchema, type AssetDeliveryType } from "../asset-delivery-type.js";
import { deliveryTypeAllSchema, type DeliveryTypeAll } from "../delivery-type-all.js";
import { fetchDeliveryTypeSchema, type FetchDeliveryType } from "../fetch-delivery-type.js";
import { generatedDeliveryTypeSchema, type GeneratedDeliveryType } from "../generated-delivery-type.js";
import { managedDeliveryTypeSchema, type ManagedDeliveryType } from "../managed-delivery-type.js";
import { socialDeliveryTypeSchema, type SocialDeliveryType } from "../social-delivery-type.js";

/** All supported delivery types. */
export type DeliveryTypeAll1 =
  | ManagedDeliveryType
  | AssetDeliveryType
  | FetchDeliveryType
  | SocialDeliveryType
  | GeneratedDeliveryType
  | DeliveryTypeAll;

export const deliveryTypeAll1Schema: Schema<DeliveryTypeAll1> = s.of<DeliveryTypeAll1>(
  s.union([
    s.lazy(() => managedDeliveryTypeSchema),
    s.lazy(() => assetDeliveryTypeSchema),
    s.lazy(() => fetchDeliveryTypeSchema),
    s.lazy(() => socialDeliveryTypeSchema),
    s.lazy(() => generatedDeliveryTypeSchema),
    s.lazy(() => deliveryTypeAllSchema),
  ]),
);
