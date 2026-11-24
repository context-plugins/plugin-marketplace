import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { transactionResourceSchema, type TransactionResource } from "../transaction-resource.js";
import {
  transactionResource1InternalSchema,
  transactionResource1Schema,
  type TransactionResource1,
} from "../transaction-resource1.js";

export type TransactionResource2 = TransactionResource | TransactionResource1;

export const transactionResource2InternalSchema: Schema<TransactionResource2> = s.of<TransactionResource2>(
  s.union([s.lazy(() => transactionResourceSchema), s.lazy(() => transactionResource1InternalSchema)]),
);

export const transactionResource2Schema: Schema<TransactionResource2> = s.lazySchema(() =>
  s.of<TransactionResource2>(
    s.union([s.lazy(() => transactionResourceSchema), s.lazy(() => transactionResource1Schema)]),
  ),
);
