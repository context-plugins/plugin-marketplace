import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  transactionRefundAllCreateSchema,
  type TransactionRefundAllCreate,
} from "../transaction-refund-all-create.js";

export type Body1 = TransactionRefundAllCreate;

export const body1Schema: Schema<Body1> = s.of<Body1>(
  s.union([s.lazy(() => transactionRefundAllCreateSchema)]),
);
