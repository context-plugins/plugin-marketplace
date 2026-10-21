import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { listEntityChargebackSchema, type ListEntityChargeback } from "./list-entity-chargeback.js";

export type Embedded23 = {
  /** A list of chargeback objects. */
  chargebacks: ListEntityChargeback[];
};

export const embedded23Schema: Schema<Embedded23> = s.object<Embedded23>({
  chargebacks: s.array(s.lazy(() => listEntityChargebackSchema)),
});
