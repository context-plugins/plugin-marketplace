import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntityRazorpayXContactsApi = {
  Contact: "contact",
} as const;
export type EntityRazorpayXContactsApi =
  | (typeof EntityRazorpayXContactsApi)[keyof typeof EntityRazorpayXContactsApi]
  | (string & {});

export const entityRazorpayXContactsApiSchema: EnumSchema<EntityRazorpayXContactsApi> =
  s.enumOf<EntityRazorpayXContactsApi>(EntityRazorpayXContactsApi);
