import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { createCategorySchema, type CreateCategory } from "./create-category.js";
import { dismissalDetailsSchema, type DismissalDetails } from "./dismissal-details.js";
import { displayStatusSchema, type DisplayStatus } from "./display-status.js";

/**
 * Request body for creating or updating a single insight's metadata. Resource results are managed
 * separately via the resource-results endpoint.
 */
export type InsightMetadataRequest = {
  /** A unique key for this insight within the source. */
  key: string;
  /** The display title of the insight. */
  title: string;
  /** A brief summary of the insight. */
  shortDescription: string;
  /** A detailed description of the insight in MDX format. */
  detailedDescriptionMdx?: string;
  /** The cloud provider associated with the resource. */
  cloudProvider: string;
  /** One or more categories this insight belongs to. */
  categories: CreateCategory[];
  /** URL to an external report related to this insight. */
  reportUrl?: string;
  /** ID of a CloudFlow template that can automate the remediation of this insight. */
  cloudFlowTemplateId?: string;
  /** A description of why this insight is considered an easy win. */
  easyWinDescription?: string;
  /** The display status of the insight. */
  status?: DisplayStatus;
  /** Details for why an insight was dismissed. */
  dismissalDetails?: DismissalDetails;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const insightMetadataRequestProperties: s.Shape<InsightMetadataRequest> = {
  key: s.string(),
  title: s.string(),
  shortDescription: s.string(),
  detailedDescriptionMdx: s.optional(s.string()),
  cloudProvider: s.string(),
  categories: s.array(s.lazy(() => createCategorySchema)),
  reportUrl: s.optional(s.string()),
  cloudFlowTemplateId: s.optional(s.string()),
  easyWinDescription: s.optional(s.string()),
  status: s.optional(s.lazy(() => displayStatusSchema)),
  dismissalDetails: s.optional(s.lazy(() => dismissalDetailsSchema)),
};

export const insightMetadataRequestInternalSchema: Schema<InsightMetadataRequest> =
  s.object<InsightMetadataRequest>(insightMetadataRequestProperties, { additionalProperties: s.json() });

export const insightMetadataRequestSchema: Schema<InsightMetadataRequest> = s.lazySchema(() =>
  s.object<InsightMetadataRequest>(
    {
      ...insightMetadataRequestProperties,
      categories: s.array(s.lazy(() => createCategorySchema)).check(s.minLength(1), s.uniqueItems()),
    },
    { additionalProperties: s.json() },
  ),
);
