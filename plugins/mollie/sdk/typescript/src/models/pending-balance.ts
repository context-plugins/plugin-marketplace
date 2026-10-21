import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subGroupSchema, type SubGroup } from "./sub-group.js";

/** The pending balance. Only available if grouping is `status-balances`. */
export type PendingBalance = {
  open?: SubGroup;
  close?: SubGroup;
  pending?: SubGroup;
  movedToAvailable?: SubGroup;
};

export const pendingBalanceSchema: Schema<PendingBalance> = s.object<PendingBalance>({
  open: s.optional(s.lazy(() => subGroupSchema)),
  close: s.optional(s.lazy(() => subGroupSchema)),
  pending: s.optional(s.lazy(() => subGroupSchema)),
  movedToAvailable: s.optional(s.lazy(() => subGroupSchema)),
});
