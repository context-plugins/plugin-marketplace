import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  statusDeliverdDevFlowsApiSchema,
  type StatusDeliverdDevFlowsApi,
} from "./status-deliverd-dev-flows-api.js";

export type Child = {
  id: string;
  title: string;
  status: StatusDeliverdDevFlowsApi;
  url: string;
  externalId: string | null;
  metadata: Record<string, unknown>;
  startedBy: string;
  createdAt: string;
  settledAt: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const childSchema: Schema<Child> = s.object<Child>(
  {
    id: s.string(),
    title: s.string(),
    status: statusDeliverdDevFlowsApiSchema,
    url: s.string(),
    externalId: s.nullable(s.string()),
    metadata: s.record(s.string(), s.unknown()),
    startedBy: s.string(),
    createdAt: s.string(),
    settledAt: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
