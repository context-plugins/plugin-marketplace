import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  insightRequestInternalSchema,
  insightRequestSchema,
  type InsightRequest,
} from "./insight-request.js";

/** Request body for creating or updating multiple insights in a batch. */
export type CreateResultsBody = {
  /** List of insights to create or update. */
  results: InsightRequest[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createResultsBodyProperties: s.Shape<CreateResultsBody> = {
  results: s.array(s.lazy(() => insightRequestInternalSchema)),
};

export const createResultsBodyInternalSchema: Schema<CreateResultsBody> = s.object<CreateResultsBody>(
  createResultsBodyProperties,
  { additionalProperties: s.json() },
);

export const createResultsBodySchema: Schema<CreateResultsBody> = s.lazySchema(() =>
  s.object<CreateResultsBody>(
    {
      ...createResultsBodyProperties,
      results: s.array(s.lazy(() => insightRequestSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
