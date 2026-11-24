import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { responseUsageSchema, type ResponseUsage } from "../response-usage.js";

export type UsageParallelAiResponsesApi = ResponseUsage;

export const usageParallelAiResponsesApiSchema: Schema<UsageParallelAiResponsesApi> =
  s.of<UsageParallelAiResponsesApi>(s.union([s.lazy(() => responseUsageSchema)]));
