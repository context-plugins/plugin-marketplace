import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  transactionConnectionOptionsSchema,
  type TransactionConnectionOptions,
} from "../transaction-connection-options.js";

/** Connection options for the payment link. */
export type ConnectionOptions1 = TransactionConnectionOptions;

export const connectionOptions1Schema: Schema<ConnectionOptions1> = s.of<ConnectionOptions1>(
  s.union([s.lazy(() => transactionConnectionOptionsSchema)]),
);
