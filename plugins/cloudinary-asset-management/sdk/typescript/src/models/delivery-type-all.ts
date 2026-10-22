import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DeliveryTypeAll = {
  MediaOptimization: "media_optimization",
} as const;
export type DeliveryTypeAll = (typeof DeliveryTypeAll)[keyof typeof DeliveryTypeAll] | (string & {});

export const deliveryTypeAllSchema: EnumSchema<DeliveryTypeAll> = s.enumOf<DeliveryTypeAll>(DeliveryTypeAll);
