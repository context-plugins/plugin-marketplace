import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { listCustomerResponseSchema, type ListCustomerResponse } from "./list-customer-response.js";

export type Embedded31 = {
  /** An array of customer objects. */
  customers: ListCustomerResponse[];
};

export const embedded31Schema: Schema<Embedded31> = s.object<Embedded31>({
  customers: s.array(s.lazy(() => listCustomerResponseSchema)),
});
