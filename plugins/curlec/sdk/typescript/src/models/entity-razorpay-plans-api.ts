import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntityRazorpayPlansApi = {
  Plan: "plan",
} as const;
export type EntityRazorpayPlansApi =
  | (typeof EntityRazorpayPlansApi)[keyof typeof EntityRazorpayPlansApi]
  | (string & {});

export const entityRazorpayPlansApiSchema: EnumSchema<EntityRazorpayPlansApi> =
  s.enumOf<EntityRazorpayPlansApi>(EntityRazorpayPlansApi);
