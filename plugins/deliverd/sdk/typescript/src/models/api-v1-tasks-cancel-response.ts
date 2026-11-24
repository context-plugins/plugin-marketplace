import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  kindDeliverdDevTasksApiSchema,
  type KindDeliverdDevTasksApi,
} from "./kind-deliverd-dev-tasks-api.js";
import {
  linkDeliverdDevTasksApiSchema,
  type LinkDeliverdDevTasksApi,
} from "./link-deliverd-dev-tasks-api.js";
import { originSchema, type Origin } from "./origin.js";
import {
  outcomeDeliverdDevTasksApiSchema,
  type OutcomeDeliverdDevTasksApi,
} from "./outcome-deliverd-dev-tasks-api.js";
import { pathSchema, type Path } from "./path.js";
import { sideTasksSchema, type SideTasks } from "./side-tasks.js";
import { state1Schema, type State1 } from "./state1.js";
import {
  statusDeliverdDevTasksApiSchema,
  type StatusDeliverdDevTasksApi,
} from "./status-deliverd-dev-tasks-api.js";

export type ApiV1TasksCancelResponse = {
  id: string;
  kind: KindDeliverdDevTasksApi;
  status: StatusDeliverdDevTasksApi;
  url: string;
  title: string;
  objective: string;
  rootTaskId: string;
  parentTaskId: string | null;
  depth: number;
  workspaceId: string | null;
  flowId: string | null;
  state: State1;
  snapshot: Record<string, unknown> | null;
  result: Record<string, unknown> | null;
  previousResults: Record<string, unknown>[];
  outcome: OutcomeDeliverdDevTasksApi | null;
  origin: Origin;
  externalId: string | null;
  sessionUrl: string | null;
  version: number;
  startedBy: string;
  createdAt: string;
  updatedAt: string;
  completedAt: string | null;
  sideTasks?: SideTasks;
  path?: Path[];
  children?: Record<string, unknown>[];
  findings?: Record<string, unknown>[];
  links?: LinkDeliverdDevTasksApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1TasksCancelResponseSchema: Schema<ApiV1TasksCancelResponse> =
  s.object<ApiV1TasksCancelResponse>(
    {
      id: s.string(),
      kind: kindDeliverdDevTasksApiSchema,
      status: statusDeliverdDevTasksApiSchema,
      url: s.string(),
      title: s.string(),
      objective: s.string(),
      rootTaskId: s.string(),
      parentTaskId: s.nullable(s.string()),
      depth: s.float64(),
      workspaceId: s.nullable(s.string()),
      flowId: s.nullable(s.string()),
      state: state1Schema,
      snapshot: s.nullable(s.record(s.string(), s.unknown())),
      result: s.nullable(s.record(s.string(), s.unknown())),
      previousResults: s.array(s.record(s.string(), s.unknown())),
      outcome: s.nullable(s.lazy(() => outcomeDeliverdDevTasksApiSchema)),
      origin: originSchema,
      externalId: s.nullable(s.string()),
      sessionUrl: s.nullable(s.string()),
      version: s.float64(),
      startedBy: s.string(),
      createdAt: s.string(),
      updatedAt: s.string(),
      completedAt: s.nullable(s.string()),
      sideTasks: s.optional(s.lazy(() => sideTasksSchema)),
      path: s.optional(s.array(s.lazy(() => pathSchema))),
      children: s.optional(s.array(s.record(s.string(), s.unknown()))),
      findings: s.optional(s.array(s.record(s.string(), s.unknown()))),
      links: s.optional(s.array(s.lazy(() => linkDeliverdDevTasksApiSchema))),
    },
    { additionalProperties: s.json() },
  );
