import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntityRazorpaySettlementsApi = {
  Settlement: "settlement",
} as const;
export type EntityRazorpaySettlementsApi =
  | (typeof EntityRazorpaySettlementsApi)[keyof typeof EntityRazorpaySettlementsApi]
  | (string & {});

export const entityRazorpaySettlementsApiSchema: EnumSchema<EntityRazorpaySettlementsApi> =
  s.enumOf<EntityRazorpaySettlementsApi>(EntityRazorpaySettlementsApi);
