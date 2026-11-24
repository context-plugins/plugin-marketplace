import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { createCategorySchema, type CreateCategory } from "./create-category.js";
import { resourceResultRequestSchema, type ResourceResultRequest } from "./resource-result-request.js";

/**
 * Request body for creating or updating an insight via the batch endpoint. Includes resource
 * results.
 */
export type InsightRequest = {
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
  /** A list of resource-level results for creating or updating an insight. */
  resourceResults: ResourceResultRequest[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const insightRequestProperties: s.Shape<InsightRequest> = {
  key: s.string(),
  title: s.string(),
  shortDescription: s.string(),
  detailedDescriptionMdx: s.optional(s.string()),
  cloudProvider: s.string(),
  categories: s.array(s.lazy(() => createCategorySchema)),
  reportUrl: s.optional(s.string()),
  cloudFlowTemplateId: s.optional(s.string()),
  easyWinDescription: s.optional(s.string()),
  resourceResults: s.array(s.lazy(() => resourceResultRequestSchema)),
};

export const insightRequestInternalSchema: Schema<InsightRequest> = s.object<InsightRequest>(
  insightRequestProperties,
  { additionalProperties: s.json() },
);

export const insightRequestSchema: Schema<InsightRequest> = s.lazySchema(() =>
  s.object<InsightRequest>(
    {
      ...insightRequestProperties,
      categories: s.array(s.lazy(() => createCategorySchema)).check(s.minLength(1), s.uniqueItems()),
    },
    { additionalProperties: s.json() },
  ),
);
