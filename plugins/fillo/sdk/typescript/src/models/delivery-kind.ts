import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DeliveryKind = {
  Webhook: "webhook",
  Integration: "integration",
} as const;
export type DeliveryKind = (typeof DeliveryKind)[keyof typeof DeliveryKind] | (string & {});

export const deliveryKindSchema: EnumSchema<DeliveryKind> = s.enumOf<DeliveryKind>(DeliveryKind);
