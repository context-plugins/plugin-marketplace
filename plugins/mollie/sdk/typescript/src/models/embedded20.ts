import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { listEntityMethodAllSchema, type ListEntityMethodAll } from "./list-entity-method-all.js";

export type Embedded20 = {
  /**
   * An array of payment method objects. For a complete reference of the payment method object,
   * refer to the [Get payment method endpoint](get-method) documentation.
   */
  methods: ListEntityMethodAll[];
};

export const embedded20Schema: Schema<Embedded20> = s.object<Embedded20>({
  methods: s.array(s.lazy(() => listEntityMethodAllSchema)),
});
