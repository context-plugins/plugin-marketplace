import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  expandedLinkedResourcesAiConfigsSchema,
  type ExpandedLinkedResourcesAiConfigs,
} from "./expanded-linked-resources-ai-configs.js";
import {
  expandedLinkedResourcesFlagsSchema,
  type ExpandedLinkedResourcesFlags,
} from "./expanded-linked-resources-flags.js";
import {
  expandedLinkedResourcesMetricsSchema,
  type ExpandedLinkedResourcesMetrics,
} from "./expanded-linked-resources-metrics.js";
import {
  expandedLinkedResourcesSegmentsSchema,
  type ExpandedLinkedResourcesSegments,
} from "./expanded-linked-resources-segments.js";

export type ExpandedLinkedResourcesItems = {
  flags: ExpandedLinkedResourcesFlags;
  segments?: ExpandedLinkedResourcesSegments;
  aiConfigs?: ExpandedLinkedResourcesAiConfigs;
  metrics?: ExpandedLinkedResourcesMetrics;
};

export const expandedLinkedResourcesItemsSchema: Schema<ExpandedLinkedResourcesItems> =
  s.object<ExpandedLinkedResourcesItems>({
    flags: expandedLinkedResourcesFlagsSchema,
    segments: s.optional(s.lazy(() => expandedLinkedResourcesSegmentsSchema)),
    aiConfigs: s.optional(s.lazy(() => expandedLinkedResourcesAiConfigsSchema)),
    metrics: s.optional(s.lazy(() => expandedLinkedResourcesMetricsSchema)),
  });
