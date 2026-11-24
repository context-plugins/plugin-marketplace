import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { completionUsageSchema, type CompletionUsage } from "../completion-usage.js";

export type Usage = CompletionUsage;

export const usageSchema: Schema<Usage> = s.of<Usage>(s.union([s.lazy(() => completionUsageSchema)]));
