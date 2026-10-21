import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { assetDeliveryTypeSchema, type AssetDeliveryType } from "../asset-delivery-type.js";
import { fetchDeliveryTypeSchema, type FetchDeliveryType } from "../fetch-delivery-type.js";
import { managedDeliveryTypeSchema, type ManagedDeliveryType } from "../managed-delivery-type.js";
import { socialDeliveryTypeSchema, type SocialDeliveryType } from "../social-delivery-type.js";

/** Delivery types accepted by the explicit operation. */
export type ExplicitDeliveryType =
  | ManagedDeliveryType
  | AssetDeliveryType
  | FetchDeliveryType
  | SocialDeliveryType;

export const explicitDeliveryTypeSchema: Schema<ExplicitDeliveryType> = s.of<ExplicitDeliveryType>(
  s.union([
    s.lazy(() => managedDeliveryTypeSchema),
    s.lazy(() => assetDeliveryTypeSchema),
    s.lazy(() => fetchDeliveryTypeSchema),
    s.lazy(() => socialDeliveryTypeSchema),
  ]),
);
