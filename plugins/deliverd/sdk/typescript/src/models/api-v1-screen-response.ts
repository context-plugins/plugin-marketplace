import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  approvalDeliverdDevScreenApiSchema,
  type ApprovalDeliverdDevScreenApi,
} from "./approval-deliverd-dev-screen-api.js";
import {
  classificationDeliverdDevReportsApiSchema,
  type ClassificationDeliverdDevReportsApi,
} from "./classification-deliverd-dev-reports-api.js";
import { findingSchema, type Finding } from "./finding.js";
import {
  modeDeliverdDevScreenApiSchema,
  type ModeDeliverdDevScreenApi,
} from "./mode-deliverd-dev-screen-api.js";
import { targetSchema, type Target } from "./target.js";
import {
  verdictDeliverdDevScreenApiSchema,
  type VerdictDeliverdDevScreenApi,
} from "./verdict-deliverd-dev-screen-api.js";
import { wouldBeSchema, type WouldBe } from "./would-be.js";

export type ApiV1ScreenResponse = {
  verdict: VerdictDeliverdDevScreenApi;
  allowed: boolean;
  classification: ClassificationDeliverdDevReportsApi;
  personalData: boolean;
  categories: string[];
  counts: Record<string, number>;
  offending: string[];
  reasons: string[];
  target: Target | null;
  findings: Finding[] | null;
  redactedText: string | null;
  approval: ApprovalDeliverdDevScreenApi | null;
  mode: ModeDeliverdDevScreenApi;
  wouldBe: WouldBe | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ScreenResponseSchema: Schema<ApiV1ScreenResponse> = s.object<ApiV1ScreenResponse>(
  {
    verdict: verdictDeliverdDevScreenApiSchema,
    allowed: s.boolean(),
    classification: classificationDeliverdDevReportsApiSchema,
    personalData: s.boolean(),
    categories: s.array(s.string()),
    counts: s.record(s.string(), s.float64()),
    offending: s.array(s.string()),
    reasons: s.array(s.string()),
    target: s.nullable(s.lazy(() => targetSchema)),
    findings: s.nullable(s.array(s.lazy(() => findingSchema))),
    redactedText: s.nullable(s.string()),
    approval: s.nullable(s.lazy(() => approvalDeliverdDevScreenApiSchema)),
    mode: modeDeliverdDevScreenApiSchema,
    wouldBe: s.nullable(s.lazy(() => wouldBeSchema)),
  },
  { additionalProperties: s.json() },
);
