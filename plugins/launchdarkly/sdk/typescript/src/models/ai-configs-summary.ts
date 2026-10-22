import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AiConfigsSummary = {
  count: number;
};

export const aiConfigsSummarySchema: Schema<AiConfigsSummary> = s.object<AiConfigsSummary>({
  count: s.int(),
});
