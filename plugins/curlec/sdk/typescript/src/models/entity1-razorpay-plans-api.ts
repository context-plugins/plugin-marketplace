import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Entity1RazorpayPlansApi = {
  Item: "item",
} as const;
export type Entity1RazorpayPlansApi =
  | (typeof Entity1RazorpayPlansApi)[keyof typeof Entity1RazorpayPlansApi]
  | (string & {});

export const entity1RazorpayPlansApiSchema: EnumSchema<Entity1RazorpayPlansApi> =
  s.enumOf<Entity1RazorpayPlansApi>(Entity1RazorpayPlansApi);
