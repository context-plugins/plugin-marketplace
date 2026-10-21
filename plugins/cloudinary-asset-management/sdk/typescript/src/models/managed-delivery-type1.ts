import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The delivery type of the asset. Default: upload */
export const ManagedDeliveryType1 = {
  Upload: "upload",
  Private: "private",
  Authenticated: "authenticated",
} as const;
export type ManagedDeliveryType1 =
  | (typeof ManagedDeliveryType1)[keyof typeof ManagedDeliveryType1]
  | (string & {});

export const managedDeliveryType1Schema: EnumSchema<ManagedDeliveryType1> =
  s.enumOf<ManagedDeliveryType1>(ManagedDeliveryType1);
