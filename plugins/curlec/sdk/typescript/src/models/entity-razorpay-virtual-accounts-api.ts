import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntityRazorpayVirtualAccountsApi = {
  VirtualAccount: "virtual_account",
} as const;
export type EntityRazorpayVirtualAccountsApi =
  | (typeof EntityRazorpayVirtualAccountsApi)[keyof typeof EntityRazorpayVirtualAccountsApi]
  | (string & {});

export const entityRazorpayVirtualAccountsApiSchema: EnumSchema<EntityRazorpayVirtualAccountsApi> =
  s.enumOf<EntityRazorpayVirtualAccountsApi>(EntityRazorpayVirtualAccountsApi);
