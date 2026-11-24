import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { categorySchema, type Category } from "./category.js";
import { dismissalDetailsSchema, type DismissalDetails } from "./dismissal-details.js";
import { displayStatusSchema, type DisplayStatus } from "./display-status.js";
import { insightSummarySchema, type InsightSummary } from "./insight-summary.js";
import { lastInsightStatusChangeSchema, type LastInsightStatusChange } from "./last-insight-status-change.js";

/** An insight result containing summary information and metadata. */
export type InsightResponse = {
  /** The source that generated the insight. */
  source?: string;
  /** The unique key identifying this insight. */
  key?: string;
  /** The display title of the insight. */
  title?: string;
  /** A brief summary of the insight. */
  shortDescription?: string;
  /** A detailed description of the insight in MDX format. */
  detailedDescriptionMdx?: string;
  /** The display status of the insight. */
  displayStatus?: DisplayStatus;
  /** The cloud provider associated with the resource. */
  cloudProvider?: string;
  /** Categories this insight belongs to. */
  categories?: Category[];
  /** Aggregate summary of risks and savings across all resource results for an insight. */
  summary?: InsightSummary;
  /** If set, this object contains the last status change made by a user for this insight */
  lastStatusChange?: LastInsightStatusChange;
  /** Timestamp of the last update to this insight. */
  lastUpdated?: Date;
  /** Tags for the insight, primarily used for security certification labels (e.g. ISO). */
  tags?: string[];
  /** URL to an external report related to this insight. */
  reportUrl?: string;
  /** ID of a CloudFlow template that can automate the remediation of this insight. */
  cloudFlowTemplateId?: string;
  /** A description of why this insight is considered an easy win. */
  easyWinDescription?: string;
  /** Details for why an insight was dismissed. */
  dismissalDetails?: DismissalDetails;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const insightResponseSchema: Schema<InsightResponse> = s.object<InsightResponse>(
  {
    source: s.optional(s.string()),
    key: s.optional(s.string()),
    title: s.optional(s.string()),
    shortDescription: s.optional(s.string()),
    detailedDescriptionMdx: s.optional(s.string()),
    displayStatus: s.optional(s.lazy(() => displayStatusSchema)),
    cloudProvider: s.optional(s.string()),
    categories: s.optional(s.array(s.lazy(() => categorySchema))),
    summary: s.optional(s.lazy(() => insightSummarySchema)),
    lastStatusChange: s.optional(s.lazy(() => lastInsightStatusChangeSchema)),
    lastUpdated: s.optional(s.dateTime()),
    tags: s.optional(s.array(s.string())),
    reportUrl: s.optional(s.string()),
    cloudFlowTemplateId: s.optional(s.string()),
    easyWinDescription: s.optional(s.string()),
    dismissalDetails: s.optional(s.lazy(() => dismissalDetailsSchema)),
  },
  { additionalProperties: s.json() },
);
