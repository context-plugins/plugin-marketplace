import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { backendIdSchema, type BackendId } from "./backend-id.js";

export type SearchExecutionConfig = {
  backendId: BackendId;
  /**
   * Selects the ordinary BYO executor pool. Required only when backendId is byo; not used for Lake
   * datasets.
   */
  poolRoutingKey?: string;
};

export const searchExecutionConfigSchema: Schema<SearchExecutionConfig> = s.object<SearchExecutionConfig>({
  backendId: backendIdSchema,
  poolRoutingKey: s.optional(s.string()),
});
