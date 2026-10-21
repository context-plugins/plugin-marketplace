import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { listEntityMethodSchema, type ListEntityMethod } from "./list-entity-method.js";

export type Embedded19 = {
  /**
   * An array of payment method objects. For a complete reference of the payment method object,
   * refer to the [Get payment method endpoint](get-method) documentation.
   */
  methods: ListEntityMethod[];
};

export const embedded19Schema: Schema<Embedded19> = s.object<Embedded19>({
  methods: s.array(s.lazy(() => listEntityMethodSchema)),
});
