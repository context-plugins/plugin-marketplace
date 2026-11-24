import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntityRazorpayLinkedAccountsApi = {
  Stakeholder: "stakeholder",
} as const;
export type EntityRazorpayLinkedAccountsApi =
  | (typeof EntityRazorpayLinkedAccountsApi)[keyof typeof EntityRazorpayLinkedAccountsApi]
  | (string & {});

export const entityRazorpayLinkedAccountsApiSchema: EnumSchema<EntityRazorpayLinkedAccountsApi> =
  s.enumOf<EntityRazorpayLinkedAccountsApi>(EntityRazorpayLinkedAccountsApi);
