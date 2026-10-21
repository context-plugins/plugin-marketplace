import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { balanceSchema, type Balance } from "./balance.js";
import { halLinkSchema, type HalLink } from "./hal-link.js";
import { totalSchema, type Total } from "./total.js";

/** Response for retrieving balance of a Dwolla Balance funding source */
export type DwollaBalanceResponse = {
  links: Record<string, HalLink>;
  balance: Balance;
  total: Total;
  lastUpdated: string;
};

export const dwollaBalanceResponseSchema: Schema<DwollaBalanceResponse> = s.object<DwollaBalanceResponse>({
  links: s.record(
    s.string(),
    s.lazy(() => halLinkSchema),
  ),
  balance: balanceSchema,
  total: totalSchema,
  lastUpdated: s.string(),
  _keysMap: {
    links: "_links",
  },
});
