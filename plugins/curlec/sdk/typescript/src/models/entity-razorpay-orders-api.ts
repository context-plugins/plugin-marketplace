import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntityRazorpayOrdersApi = {
  Order: "order",
} as const;
export type EntityRazorpayOrdersApi =
  | (typeof EntityRazorpayOrdersApi)[keyof typeof EntityRazorpayOrdersApi]
  | (string & {});

export const entityRazorpayOrdersApiSchema: EnumSchema<EntityRazorpayOrdersApi> =
  s.enumOf<EntityRazorpayOrdersApi>(EntityRazorpayOrdersApi);
