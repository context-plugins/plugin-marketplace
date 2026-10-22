import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Metadata2 = {
  processingTimeMs?: number;
  modelVersion?: string;
  aiTransactionId?: string;
};

export const metadata2Schema: Schema<Metadata2> = s.object<Metadata2>({
  processingTimeMs: s.optional(s.float64()),
  modelVersion: s.optional(s.string()),
  aiTransactionId: s.optional(s.string()),
});
