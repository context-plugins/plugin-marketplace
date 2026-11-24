import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Entity2 = {
  SettlementOndemandPayout: "settlement.ondemand_payout",
} as const;
export type Entity2 = (typeof Entity2)[keyof typeof Entity2] | (string & {});

export const entity2Schema: EnumSchema<Entity2> = s.enumOf<Entity2>(Entity2);
