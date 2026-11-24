import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Entity1RazorpayXPayoutsApi = {
  FundAccount: "fund_account",
} as const;
export type Entity1RazorpayXPayoutsApi =
  | (typeof Entity1RazorpayXPayoutsApi)[keyof typeof Entity1RazorpayXPayoutsApi]
  | (string & {});

export const entity1RazorpayXPayoutsApiSchema: EnumSchema<Entity1RazorpayXPayoutsApi> =
  s.enumOf<Entity1RazorpayXPayoutsApi>(Entity1RazorpayXPayoutsApi);
