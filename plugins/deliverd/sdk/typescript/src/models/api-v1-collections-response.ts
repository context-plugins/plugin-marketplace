import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { agent1Schema, type Agent1 } from "./agent1.js";
import { question1Schema, type Question1 } from "./question1.js";
import { responseSchema, type Response } from "./response.js";
import {
  statusDeliverdDevCollectionsApiSchema,
  type StatusDeliverdDevCollectionsApi,
} from "./status-deliverd-dev-collections-api.js";

export type ApiV1CollectionsResponse = {
  callbackSecret?: string;
  id: string;
  status: StatusDeliverdDevCollectionsApi;
  url: string;
  title: string;
  instructions: string | null;
  reportId: string | null;
  externalId: string | null;
  metadata: Record<string, unknown>;
  requestedBy: string;
  requiredResponses: number;
  questions: Question1[];
  responses: Response[];
  submittedCount: number;
  askedCount: number;
  settledAt: string | null;
  dueAt: string | null;
  expiresAt: string | null;
  agent: Agent1 | null;
  model: string | null;
  createdAt: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1CollectionsResponseSchema: Schema<ApiV1CollectionsResponse> =
  s.object<ApiV1CollectionsResponse>(
    {
      callbackSecret: s.optional(s.string()),
      id: s.string(),
      status: statusDeliverdDevCollectionsApiSchema,
      url: s.string(),
      title: s.string(),
      instructions: s.nullable(s.string()),
      reportId: s.nullable(s.string()),
      externalId: s.nullable(s.string()),
      metadata: s.record(s.string(), s.unknown()),
      requestedBy: s.string(),
      requiredResponses: s.float64(),
      questions: s.array(s.lazy(() => question1Schema)),
      responses: s.array(s.lazy(() => responseSchema)),
      submittedCount: s.float64(),
      askedCount: s.float64(),
      settledAt: s.nullable(s.string()),
      dueAt: s.nullable(s.string()),
      expiresAt: s.nullable(s.string()),
      agent: s.nullable(s.lazy(() => agent1Schema)),
      model: s.nullable(s.string()),
      createdAt: s.string(),
    },
    { additionalProperties: s.json() },
  );
