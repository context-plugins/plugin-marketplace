import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { listEntityBalanceSchema, type ListEntityBalance } from "./list-entity-balance.js";

export type Embedded1 = {
  /**
   * An array of balance objects. For a complete reference of the balance object, refer to the [Get
   * balance endpoint](get-balance) documentation.
   */
  balances: ListEntityBalance[];
};

export const embedded1Schema: Schema<Embedded1> = s.object<Embedded1>({
  balances: s.array(s.lazy(() => listEntityBalanceSchema)),
});
