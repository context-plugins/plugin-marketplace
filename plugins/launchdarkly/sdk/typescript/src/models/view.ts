import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { aiConfigsSummarySchema, type AiConfigsSummary } from "./ai-configs-summary.js";
import { expandedLinkedAiConfigsSchema, type ExpandedLinkedAiConfigs } from "./expanded-linked-ai-configs.js";
import { expandedLinkedFlagsSchema, type ExpandedLinkedFlags } from "./expanded-linked-flags.js";
import { expandedLinkedMetricsSchema, type ExpandedLinkedMetrics } from "./expanded-linked-metrics.js";
import { expandedLinkedResourcesSchema, type ExpandedLinkedResources } from "./expanded-linked-resources.js";
import { expandedLinkedSegmentsSchema, type ExpandedLinkedSegments } from "./expanded-linked-segments.js";
import { flagsSummarySchema, type FlagsSummary } from "./flags-summary.js";
import { maintainerSchema, type Maintainer } from "./maintainer.js";
import { metricsSummarySchema, type MetricsSummary } from "./metrics-summary.js";
import { parentAndSelfLinksSchema, type ParentAndSelfLinks } from "./parent-and-self-links.js";
import { resourceSummarySchema, type ResourceSummary } from "./resource-summary.js";
import { segmentsSummarySchema, type SegmentsSummary } from "./segments-summary.js";
import { viewsAccessSchema, type ViewsAccess } from "./views-access.js";

export type View = {
  access?: ViewsAccess;
  /** The location and content type of related resources */
  links?: ParentAndSelfLinks;
  /** Unique ID of this view */
  id: string;
  /** ID of the account that owns this view */
  accountId: string;
  /** ID of the project this view belongs to */
  projectId: string;
  /** Key of the project this view belongs to */
  projectKey: string;
  /** Unique key for the view within the account/project */
  key: string;
  /** Human-readable name for the view */
  name: string;
  /** Optional detailed description of the view */
  description: string;
  /** Whether to generate SDK keys for this view. Defaults to false. */
  generateSdkKeys: boolean;
  /** Version number for tracking changes */
  version: number;
  /** Tags associated with this view */
  tags: string[];
  createdAt: number;
  updatedAt: number;
  /** Whether this view is archived @default false */
  archived?: boolean;
  archivedAt?: number;
  deletedAt?: number;
  /** Whether this view is deleted @default false */
  deleted?: boolean;
  maintainer?: Maintainer;
  flagsSummary?: FlagsSummary;
  segmentsSummary?: SegmentsSummary;
  metricsSummary?: MetricsSummary;
  aiConfigsSummary?: AiConfigsSummary;
  resourceSummary?: ResourceSummary;
  /** Details on linked flags for a view - requires passing the 'allFlags' expand field */
  flagsExpanded?: ExpandedLinkedFlags;
  /** Details on linked segments for a view - requires passing the 'allSegments' expand field */
  segmentsExpanded?: ExpandedLinkedSegments;
  metricsExpanded?: ExpandedLinkedMetrics;
  aiConfigsExpanded?: ExpandedLinkedAiConfigs;
  /** Details on linked resources for a view - requires passing the 'allResources' expand field */
  resourcesExpanded?: ExpandedLinkedResources;
};

export const viewSchema: Schema<View> = s.object<View>({
  access: s.optional(s.lazy(() => viewsAccessSchema)),
  links: s.optional(s.lazy(() => parentAndSelfLinksSchema)),
  id: s.string(),
  accountId: s.string(),
  projectId: s.string(),
  projectKey: s.string(),
  key: s.string(),
  name: s.string(),
  description: s.string(),
  generateSdkKeys: s.boolean(),
  version: s.int(),
  tags: s.array(s.string()),
  createdAt: s.int(),
  updatedAt: s.int(),
  archived: s.defaulted(s.boolean(), false),
  archivedAt: s.optional(s.int()),
  deletedAt: s.optional(s.int()),
  deleted: s.defaulted(s.boolean(), false),
  maintainer: s.optional(s.lazy(() => maintainerSchema)),
  flagsSummary: s.optional(s.lazy(() => flagsSummarySchema)),
  segmentsSummary: s.optional(s.lazy(() => segmentsSummarySchema)),
  metricsSummary: s.optional(s.lazy(() => metricsSummarySchema)),
  aiConfigsSummary: s.optional(s.lazy(() => aiConfigsSummarySchema)),
  resourceSummary: s.optional(s.lazy(() => resourceSummarySchema)),
  flagsExpanded: s.optional(s.lazy(() => expandedLinkedFlagsSchema)),
  segmentsExpanded: s.optional(s.lazy(() => expandedLinkedSegmentsSchema)),
  metricsExpanded: s.optional(s.lazy(() => expandedLinkedMetricsSchema)),
  aiConfigsExpanded: s.optional(s.lazy(() => expandedLinkedAiConfigsSchema)),
  resourcesExpanded: s.optional(s.lazy(() => expandedLinkedResourcesSchema)),
  _keysMap: {
    access: "_access",
    links: "_links",
  },
});
