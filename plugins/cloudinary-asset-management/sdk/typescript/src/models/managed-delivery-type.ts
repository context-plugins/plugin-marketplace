import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Managed delivery types for assets uploaded and stored by Cloudinary. */
export const ManagedDeliveryType = {
  Upload: "upload",
  Private: "private",
  Authenticated: "authenticated",
} as const;
export type ManagedDeliveryType =
  | (typeof ManagedDeliveryType)[keyof typeof ManagedDeliveryType]
  | (string & {});

export const managedDeliveryTypeSchema: EnumSchema<ManagedDeliveryType> =
  s.enumOf<ManagedDeliveryType>(ManagedDeliveryType);
