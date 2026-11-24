import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntityRazorpayItemsApi = {
  Item: "item",
} as const;
export type EntityRazorpayItemsApi =
  | (typeof EntityRazorpayItemsApi)[keyof typeof EntityRazorpayItemsApi]
  | (string & {});

export const entityRazorpayItemsApiSchema: EnumSchema<EntityRazorpayItemsApi> =
  s.enumOf<EntityRazorpayItemsApi>(EntityRazorpayItemsApi);
