import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { entitySettlementSchema, type EntitySettlement } from "./entity-settlement.js";

export type Embedded3 = {
  /**
   * An array of settlement objects. For a complete reference of the settlement object, refer to the
   * [Get settlement endpoint](get-settlement) documentation.
   */
  settlements: EntitySettlement[];
};

export const embedded3Schema: Schema<Embedded3> = s.object<Embedded3>({
  settlements: s.array(s.lazy(() => entitySettlementSchema)),
});
