import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { listEntityPayoutSchema, type ListEntityPayout } from "./list-entity-payout.js";

export type Embedded41 = {
  /**
   * An array of payout objects. For a complete reference of the payout object, refer to the [Get
   * payout endpoint](get-payout) documentation.
   */
  payouts: ListEntityPayout[];
};

export const embedded41Schema: Schema<Embedded41> = s.object<Embedded41>({
  payouts: s.array(s.lazy(() => listEntityPayoutSchema)),
});
