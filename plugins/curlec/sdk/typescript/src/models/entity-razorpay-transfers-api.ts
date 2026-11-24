import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntityRazorpayTransfersApi = {
  Reversal: "reversal",
} as const;
export type EntityRazorpayTransfersApi =
  | (typeof EntityRazorpayTransfersApi)[keyof typeof EntityRazorpayTransfersApi]
  | (string & {});

export const entityRazorpayTransfersApiSchema: EnumSchema<EntityRazorpayTransfersApi> =
  s.enumOf<EntityRazorpayTransfersApi>(EntityRazorpayTransfersApi);
