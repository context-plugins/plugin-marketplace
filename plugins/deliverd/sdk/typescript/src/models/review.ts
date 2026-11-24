import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { agent1Schema, type Agent1 } from "./agent1.js";
import { reviewerSchema, type Reviewer } from "./reviewer.js";
import {
  statusDeliverdDevReviewsApiSchema,
  type StatusDeliverdDevReviewsApi,
} from "./status-deliverd-dev-reviews-api.js";
import {
  verdictDeliverdDevReviewsApiSchema,
  type VerdictDeliverdDevReviewsApi,
} from "./verdict-deliverd-dev-reviews-api.js";

export type Review = {
  callbackSecret?: string;
  id: string;
  status: StatusDeliverdDevReviewsApi;
  url: string;
  title: string;
  instructions: string | null;
  reportId: string | null;
  versionId: string | null;
  externalId: string | null;
  metadata: Record<string, unknown>;
  requestedBy: string;
  requiredApprovals: number;
  reviewers: Reviewer[];
  verdicts: VerdictDeliverdDevReviewsApi[];
  threadCount: number;
  settledAt: string | null;
  expiresAt: string | null;
  agent: Agent1 | null;
  model: string | null;
  createdAt: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reviewSchema: Schema<Review> = s.object<Review>(
  {
    callbackSecret: s.optional(s.string()),
    id: s.string(),
    status: statusDeliverdDevReviewsApiSchema,
    url: s.string(),
    title: s.string(),
    instructions: s.nullable(s.string()),
    reportId: s.nullable(s.string()),
    versionId: s.nullable(s.string()),
    externalId: s.nullable(s.string()),
    metadata: s.record(s.string(), s.unknown()),
    requestedBy: s.string(),
    requiredApprovals: s.float64(),
    reviewers: s.array(s.lazy(() => reviewerSchema)),
    verdicts: s.array(s.lazy(() => verdictDeliverdDevReviewsApiSchema)),
    threadCount: s.float64(),
    settledAt: s.nullable(s.string()),
    expiresAt: s.nullable(s.string()),
    agent: s.nullable(s.lazy(() => agent1Schema)),
    model: s.nullable(s.string()),
    createdAt: s.string(),
  },
  { additionalProperties: s.json() },
);
