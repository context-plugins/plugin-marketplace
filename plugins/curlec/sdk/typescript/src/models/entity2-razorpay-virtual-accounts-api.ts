import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Entity2RazorpayVirtualAccountsApi = {
  Payment: "payment",
} as const;
export type Entity2RazorpayVirtualAccountsApi =
  | (typeof Entity2RazorpayVirtualAccountsApi)[keyof typeof Entity2RazorpayVirtualAccountsApi]
  | (string & {});

export const entity2RazorpayVirtualAccountsApiSchema: EnumSchema<Entity2RazorpayVirtualAccountsApi> =
  s.enumOf<Entity2RazorpayVirtualAccountsApi>(Entity2RazorpayVirtualAccountsApi);
