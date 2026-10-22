import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { subGroupSchema, type SubGroup } from "./sub-group.js";

/** Only available on `transaction-categories` grouping. */
export type Chargebacks = {
  pending?: SubGroup;
  movedToAvailable?: SubGroup;
  immediatelyAvailable?: SubGroup;
};

export const chargebacksSchema: Schema<Chargebacks> = s.object<Chargebacks>({
  pending: s.optional(s.lazy(() => subGroupSchema)),
  movedToAvailable: s.optional(s.lazy(() => subGroupSchema)),
  immediatelyAvailable: s.optional(s.lazy(() => subGroupSchema)),
});
