import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { severitySchema, type Severity } from "./severity.js";
import {
  statusDeliverdDevGovernanceApiSchema,
  type StatusDeliverdDevGovernanceApi,
} from "./status-deliverd-dev-governance-api.js";

export type Item = {
  id: string;
  taskId: string | null;
  aiSystemId: string | null;
  title: string;
  description: string;
  severity: Severity;
  status: StatusDeliverdDevGovernanceApi;
  reportedByLabel: string;
  reportedAt: Date;
  resolution: string | null;
  resolvedByLabel: string | null;
  resolvedAt: Date | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const itemSchema: Schema<Item> = s.object<Item>(
  {
    id: s.string(),
    taskId: s.nullable(s.string()),
    aiSystemId: s.nullable(s.string()),
    title: s.string(),
    description: s.string(),
    severity: severitySchema,
    status: statusDeliverdDevGovernanceApiSchema,
    reportedByLabel: s.string(),
    reportedAt: s.dateTime(),
    resolution: s.nullable(s.string()),
    resolvedByLabel: s.nullable(s.string()),
    resolvedAt: s.nullable(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
