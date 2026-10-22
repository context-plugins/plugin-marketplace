import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { expandedAiConfigSchema, type ExpandedAiConfig } from "./expanded-ai-config.js";

export type ExpandedLinkedResourcesAiConfigs = {
  items: ExpandedAiConfig[];
  totalCount: number;
};

export const expandedLinkedResourcesAiConfigsSchema: Schema<ExpandedLinkedResourcesAiConfigs> =
  s.object<ExpandedLinkedResourcesAiConfigs>({
    items: s.array(s.lazy(() => expandedAiConfigSchema)),
    totalCount: s.int(),
  });
