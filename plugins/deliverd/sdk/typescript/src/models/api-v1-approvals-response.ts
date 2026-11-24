import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { agent1Schema, type Agent1 } from "./agent1.js";
import { changeSchema, type Change } from "./change.js";
import { concernSchema, type Concern } from "./concern.js";
import { factor1Schema, type Factor1 } from "./factor1.js";
import { link1Schema, type Link1 } from "./link1.js";
import { questionSchema, type Question } from "./question.js";
import { recommendation1Schema, type Recommendation1 } from "./recommendation1.js";
import { riskSchema, type Risk } from "./risk.js";
import { status1Schema, type Status1 } from "./status1.js";

export type ApiV1ApprovalsResponse = {
  callbackSecret?: string;
  id: string;
  status: Status1;
  url: string;
  title: string;
  description: string | null;
  risk: Risk;
  factors: Factor1[];
  links: Link1[];
  reportId: string | null;
  externalId: string | null;
  metadata: Record<string, unknown>;
  input: Record<string, unknown> | null;
  editableFields: string[];
  approvedInput: Record<string, unknown> | null;
  changes: Change[];
  concerns: Concern[];
  requestedBy: string;
  approvers: string[];
  requiredApprovals: number;
  approvalsSoFar: number;
  decidedBy: string | null;
  decidedById: string | null;
  decidedAt: string | null;
  note: string | null;
  expiresAt: string | null;
  questions: Question[];
  recommendation: Recommendation1 | null;
  agent: Agent1 | null;
  model: string | null;
  createdAt: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ApprovalsResponseSchema: Schema<ApiV1ApprovalsResponse> = s.object<ApiV1ApprovalsResponse>(
  {
    callbackSecret: s.optional(s.string()),
    id: s.string(),
    status: status1Schema,
    url: s.string(),
    title: s.string(),
    description: s.nullable(s.string()),
    risk: riskSchema,
    factors: s.array(s.lazy(() => factor1Schema)),
    links: s.array(s.lazy(() => link1Schema)),
    reportId: s.nullable(s.string()),
    externalId: s.nullable(s.string()),
    metadata: s.record(s.string(), s.unknown()),
    input: s.nullable(s.record(s.string(), s.unknown())),
    editableFields: s.array(s.string()),
    approvedInput: s.nullable(s.record(s.string(), s.unknown())),
    changes: s.array(s.lazy(() => changeSchema)),
    concerns: s.array(s.lazy(() => concernSchema)),
    requestedBy: s.string(),
    approvers: s.array(s.string()),
    requiredApprovals: s.float64(),
    approvalsSoFar: s.float64(),
    decidedBy: s.nullable(s.string()),
    decidedById: s.nullable(s.string()),
    decidedAt: s.nullable(s.string()),
    note: s.nullable(s.string()),
    expiresAt: s.nullable(s.string()),
    questions: s.array(s.lazy(() => questionSchema)),
    recommendation: s.nullable(s.lazy(() => recommendation1Schema)),
    agent: s.nullable(s.lazy(() => agent1Schema)),
    model: s.nullable(s.string()),
    createdAt: s.string(),
  },
  { additionalProperties: s.json() },
);
