import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Entity1RazorpayOrdersApi = {
  Payment: "payment",
} as const;
export type Entity1RazorpayOrdersApi =
  | (typeof Entity1RazorpayOrdersApi)[keyof typeof Entity1RazorpayOrdersApi]
  | (string & {});

export const entity1RazorpayOrdersApiSchema: EnumSchema<Entity1RazorpayOrdersApi> =
  s.enumOf<Entity1RazorpayOrdersApi>(Entity1RazorpayOrdersApi);
