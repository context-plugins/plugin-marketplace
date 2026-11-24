import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { usageItemSchema, type UsageItem } from "../usage-item.js";

/** Usage metrics for the extract request. */
export type UsageParallelAiExtractApi = UsageItem[];

export const usageParallelAiExtractApiSchema: Schema<UsageParallelAiExtractApi> =
  s.of<UsageParallelAiExtractApi>(s.union([s.array(s.lazy(() => usageItemSchema))]));
