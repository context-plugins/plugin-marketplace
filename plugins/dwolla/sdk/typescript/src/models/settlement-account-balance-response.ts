import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { availableSchema, type Available } from "./available.js";
import { links31Schema, type Links31 } from "./links31.js";

/** Response for retrieving balance of a settlement account with bankUsageType = card-network */
export type SettlementAccountBalanceResponse = {
  links: Links31;
  available: Available;
};

export const settlementAccountBalanceResponseSchema: Schema<SettlementAccountBalanceResponse> =
  s.object<SettlementAccountBalanceResponse>({
    links: links31Schema,
    available: availableSchema,
    _keysMap: {
      links: "_links",
    },
  });
