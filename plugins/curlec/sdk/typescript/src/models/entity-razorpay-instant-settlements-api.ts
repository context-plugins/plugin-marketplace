import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EntityRazorpayInstantSettlementsApi = {
  SettlementOndemand: "settlement.ondemand",
} as const;
export type EntityRazorpayInstantSettlementsApi =
  | (typeof EntityRazorpayInstantSettlementsApi)[keyof typeof EntityRazorpayInstantSettlementsApi]
  | (string & {});

export const entityRazorpayInstantSettlementsApiSchema: EnumSchema<EntityRazorpayInstantSettlementsApi> =
  s.enumOf<EntityRazorpayInstantSettlementsApi>(EntityRazorpayInstantSettlementsApi);
