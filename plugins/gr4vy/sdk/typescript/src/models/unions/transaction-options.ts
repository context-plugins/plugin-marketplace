import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { pazeTransactionOptionsSchema, type PazeTransactionOptions } from "../paze-transaction-options.js";

/** Client configuration data overriding values configured during merchant onboarding. */
export type TransactionOptions = PazeTransactionOptions;

export const transactionOptionsSchema: Schema<TransactionOptions> = s.of<TransactionOptions>(
  s.union([s.lazy(() => pazeTransactionOptionsSchema)]),
);
