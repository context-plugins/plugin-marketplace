import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { expandedAiConfigSchema, type ExpandedAiConfig } from "./expanded-ai-config.js";

export type ExpandedLinkedAiConfigs = {
  items: ExpandedAiConfig[];
  totalCount: number;
};

export const expandedLinkedAiConfigsSchema: Schema<ExpandedLinkedAiConfigs> =
  s.object<ExpandedLinkedAiConfigs>({
    items: s.array(s.lazy(() => expandedAiConfigSchema)),
    totalCount: s.int(),
  });
