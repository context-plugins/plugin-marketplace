import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  pazeEnhancedTransactionDataSchema,
  type PazeEnhancedTransactionData,
} from "../paze-enhanced-transaction-data.js";

/** Additional purchase context used by Paze for risk scoring. */
export type EnhancedTransactionData = PazeEnhancedTransactionData;

export const enhancedTransactionDataSchema: Schema<EnhancedTransactionData> = s.of<EnhancedTransactionData>(
  s.union([s.lazy(() => pazeEnhancedTransactionDataSchema)]),
);
