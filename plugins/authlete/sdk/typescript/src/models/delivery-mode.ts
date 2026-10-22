import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DeliveryMode = {
  Ping: "PING",
  Poll: "POLL",
  Push: "PUSH",
} as const;
export type DeliveryMode = (typeof DeliveryMode)[keyof typeof DeliveryMode] | (string & {});

export const deliveryModeSchema: EnumSchema<DeliveryMode> = s.enumOf<DeliveryMode>(DeliveryMode);
