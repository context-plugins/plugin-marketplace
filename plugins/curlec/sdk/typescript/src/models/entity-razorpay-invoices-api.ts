import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntityRazorpayInvoicesApi = {
  Invoice: "invoice",
} as const;
export type EntityRazorpayInvoicesApi =
  | (typeof EntityRazorpayInvoicesApi)[keyof typeof EntityRazorpayInvoicesApi]
  | (string & {});

export const entityRazorpayInvoicesApiSchema: EnumSchema<EntityRazorpayInvoicesApi> =
  s.enumOf<EntityRazorpayInvoicesApi>(EntityRazorpayInvoicesApi);
