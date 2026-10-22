import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { chargebackSchema, type Chargeback } from "./chargeback.js";

/** A list of chargeback records for a transaction. */
export type Chargebacks = {
  /** The list of chargeback objects. */
  items: Chargeback[];
};

export const chargebacksSchema: Schema<Chargebacks> = s.object<Chargebacks>({
  items: s.array(s.lazy(() => chargebackSchema)),
});
