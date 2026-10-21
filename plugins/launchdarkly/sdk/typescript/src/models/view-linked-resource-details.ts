import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { expandedAiConfigSchema, type ExpandedAiConfig } from "./expanded-ai-config.js";
import { expandedFlagSchema, type ExpandedFlag } from "./expanded-flag.js";
import { expandedMetricSchema, type ExpandedMetric } from "./expanded-metric.js";
import { expandedSegmentSchema, type ExpandedSegment } from "./expanded-segment.js";
import { viewSchema, type View } from "./view.js";

export type ViewLinkedResourceDetails = {
  view?: View;
  /** Flag representation for Views API - contains only fields actually used by the Views service */
  flag?: ExpandedFlag;
  /**
   * Segment representation for Views API - contains only fields actually used by the Views service
   */
  segment?: ExpandedSegment;
  /**
   * AI Config representation for Views API - contains only fields actually used by the Views
   * service
   */
  aiConfig?: ExpandedAiConfig;
  /**
   * Metric representation for Views API - contains only fields actually used by the Views service
   */
  metric?: ExpandedMetric;
};

export const viewLinkedResourceDetailsSchema: Schema<ViewLinkedResourceDetails> =
  s.object<ViewLinkedResourceDetails>({
    view: s.optional(s.lazy(() => viewSchema)),
    flag: s.optional(s.lazy(() => expandedFlagSchema)),
    segment: s.optional(s.lazy(() => expandedSegmentSchema)),
    aiConfig: s.optional(s.lazy(() => expandedAiConfigSchema)),
    metric: s.optional(s.lazy(() => expandedMetricSchema)),
  });
