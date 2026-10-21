import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Metadata1 = {
  /** Time taken to generate response in milliseconds */
  processingTimeMs?: number;
  /** Version of the AI model used */
  modelVersion?: string;
  /** Transaction ID for tracking in AI backend */
  aiTransactionId?: string;
  /** Additional context or reasoning */
  reason?: string;
};

export const metadata1Schema: Schema<Metadata1> = s.object<Metadata1>({
  processingTimeMs: s.optional(s.float64()),
  modelVersion: s.optional(s.string()),
  aiTransactionId: s.optional(s.string()),
  reason: s.optional(s.string()),
});
