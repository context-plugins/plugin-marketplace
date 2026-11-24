import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Entity2RazorpayOrdersApi = {
  Collection: "collection",
} as const;
export type Entity2RazorpayOrdersApi =
  | (typeof Entity2RazorpayOrdersApi)[keyof typeof Entity2RazorpayOrdersApi]
  | (string & {});

export const entity2RazorpayOrdersApiSchema: EnumSchema<Entity2RazorpayOrdersApi> =
  s.enumOf<Entity2RazorpayOrdersApi>(Entity2RazorpayOrdersApi);
