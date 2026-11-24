import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { childSchema, type Child } from "./child.js";
import { memberSchema, type Member } from "./member.js";
import {
  statusDeliverdDevFlowsApiSchema,
  type StatusDeliverdDevFlowsApi,
} from "./status-deliverd-dev-flows-api.js";
import { timelineSchema, type Timeline } from "./timeline.js";

export type ApiV1FlowsResponse = {
  id: string;
  status: StatusDeliverdDevFlowsApi;
  url: string;
  title: string;
  description: string | null;
  externalId: string | null;
  metadata: Record<string, unknown>;
  startedBy: string;
  members: Member[];
  memberCount: number;
  openCount: number;
  allSettled: boolean;
  timeline?: Timeline[];
  children?: Child[];
  settledAt: string | null;
  createdAt: string;
  parentFlowId: string | null;
  providerExecutionId: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1FlowsResponseSchema: Schema<ApiV1FlowsResponse> = s.object<ApiV1FlowsResponse>(
  {
    id: s.string(),
    status: statusDeliverdDevFlowsApiSchema,
    url: s.string(),
    title: s.string(),
    description: s.nullable(s.string()),
    externalId: s.nullable(s.string()),
    metadata: s.record(s.string(), s.unknown()),
    startedBy: s.string(),
    members: s.array(s.lazy(() => memberSchema)),
    memberCount: s.float64(),
    openCount: s.float64(),
    allSettled: s.boolean(),
    timeline: s.optional(s.array(s.lazy(() => timelineSchema))),
    children: s.optional(s.array(s.lazy(() => childSchema))),
    settledAt: s.nullable(s.string()),
    createdAt: s.string(),
    parentFlowId: s.nullable(s.string()),
    providerExecutionId: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
