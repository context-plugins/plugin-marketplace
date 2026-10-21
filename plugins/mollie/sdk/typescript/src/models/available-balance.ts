import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subGroupSchema, type SubGroup } from "./sub-group.js";

/** The available balance. Only available if grouping is `status-balances`. */
export type AvailableBalance = {
  open?: SubGroup;
  movedFromPending?: SubGroup;
  immediatelyAvailable?: SubGroup;
  close?: SubGroup;
};

export const availableBalanceSchema: Schema<AvailableBalance> = s.object<AvailableBalance>({
  open: s.optional(s.lazy(() => subGroupSchema)),
  movedFromPending: s.optional(s.lazy(() => subGroupSchema)),
  immediatelyAvailable: s.optional(s.lazy(() => subGroupSchema)),
  close: s.optional(s.lazy(() => subGroupSchema)),
});
