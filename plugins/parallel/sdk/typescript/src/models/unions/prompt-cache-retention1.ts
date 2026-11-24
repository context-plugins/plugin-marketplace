import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { promptCacheRetentionSchema, type PromptCacheRetention } from "../prompt-cache-retention.js";

export type PromptCacheRetention1 = PromptCacheRetention;

export const promptCacheRetention1Schema: Schema<PromptCacheRetention1> = s.of<PromptCacheRetention1>(
  s.union([s.lazy(() => promptCacheRetentionSchema)]),
);
