import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Condition filter. 'nwt' = New With Tags only. */
export const ConditionCompSniperMarketplaceAndShippingPoshmarkApi = {
  All: "all",
  Nwt: "nwt",
} as const;
export type ConditionCompSniperMarketplaceAndShippingPoshmarkApi =
  | (typeof ConditionCompSniperMarketplaceAndShippingPoshmarkApi)[keyof typeof ConditionCompSniperMarketplaceAndShippingPoshmarkApi]
  | (string & {});

export const conditionCompSniperMarketplaceAndShippingPoshmarkApiSchema: EnumSchema<ConditionCompSniperMarketplaceAndShippingPoshmarkApi> =
  s.enumOf<ConditionCompSniperMarketplaceAndShippingPoshmarkApi>(
    ConditionCompSniperMarketplaceAndShippingPoshmarkApi,
  );
