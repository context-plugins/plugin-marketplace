import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { usageItemSchema, type UsageItem } from "../usage-item.js";

/** Usage metrics for the search request. */
export type UsageParallelAiSearchApi = UsageItem[];

export const usageParallelAiSearchApiSchema: Schema<UsageParallelAiSearchApi> =
  s.of<UsageParallelAiSearchApi>(s.union([s.array(s.lazy(() => usageItemSchema))]));
