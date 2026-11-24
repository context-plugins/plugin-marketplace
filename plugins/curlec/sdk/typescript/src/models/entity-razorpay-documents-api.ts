import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntityRazorpayDocumentsApi = {
  Document: "document",
} as const;
export type EntityRazorpayDocumentsApi =
  | (typeof EntityRazorpayDocumentsApi)[keyof typeof EntityRazorpayDocumentsApi]
  | (string & {});

export const entityRazorpayDocumentsApiSchema: EnumSchema<EntityRazorpayDocumentsApi> =
  s.enumOf<EntityRazorpayDocumentsApi>(EntityRazorpayDocumentsApi);
