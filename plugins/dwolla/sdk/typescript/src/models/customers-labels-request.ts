import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";

export type CustomersLabelsRequest = {
  amount: Amount;
};

export const customersLabelsRequestSchema: Schema<CustomersLabelsRequest> = s.object<CustomersLabelsRequest>({
  amount: amountSchema,
});
