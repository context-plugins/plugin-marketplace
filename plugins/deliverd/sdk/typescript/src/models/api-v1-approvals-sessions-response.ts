import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { approvalStatusSchema, type ApprovalStatus } from "./approval-status.js";
import { approverSchema, type Approver } from "./approver.js";
import { decisionSchema, type Decision } from "./decision.js";
import { modeSchema, type Mode } from "./mode.js";
import { status7Schema, type Status7 } from "./status7.js";

export type ApiV1ApprovalsSessionsResponse = {
  id: string;
  /** @default "decision_session" */
  object?: "decision_session";
  approvalId: string;
  approver: Approver;
  mode: Mode;
  origin: string | null;
  returnUrl: string | null;
  /** Returned once, when the session is made. */
  url?: string;
  /** Returned once, when the session is made. */
  clientSecret?: string;
  status: Status7;
  decision: Decision | null;
  approvalStatus: ApprovalStatus;
  expiresAt: string;
  verifiedAt: string | null;
  completedAt: string | null;
  createdAt: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ApprovalsSessionsResponseSchema: Schema<ApiV1ApprovalsSessionsResponse> =
  s.object<ApiV1ApprovalsSessionsResponse>(
    {
      id: s.string(),
      object: s.defaulted(s.literal("decision_session"), "decision_session"),
      approvalId: s.string(),
      approver: approverSchema,
      mode: modeSchema,
      origin: s.nullable(s.string()),
      returnUrl: s.nullable(s.string()),
      url: s.optional(s.string()),
      clientSecret: s.optional(s.string()),
      status: status7Schema,
      decision: s.nullable(s.lazy(() => decisionSchema)),
      approvalStatus: approvalStatusSchema,
      expiresAt: s.string(),
      verifiedAt: s.nullable(s.string()),
      completedAt: s.nullable(s.string()),
      createdAt: s.string(),
    },
    { additionalProperties: s.json() },
  );
