import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { requirementCheckSchema, type RequirementCheck } from "./requirement-check.js";

/**
 * ``evaluated_trace_ids`` is the K traces actually scored.
 *
 * ``candidate_count`` is the total eligible pool. When ``candidate_count < k`` the count check
 * fails and per-K checks score whatever candidates exist.
 */
export type ReadyRequirementsEvaluation = {
  passed: boolean;
  k: number;
  candidateCount: number;
  evaluatedTraceIds?: string[];
  /** @default 1 */
  requirementsVersion?: number;
  checks?: RequirementCheck[];
  /** @default true */
  canOverride?: boolean;
  /** @default true */
  hasRequirements?: boolean;
  evaluatedAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const readyRequirementsEvaluationProperties: s.Shape<ReadyRequirementsEvaluation> = {
  passed: s.boolean(),
  k: s.int(),
  candidateCount: s.int(),
  evaluatedTraceIds: s.optional(s.array(s.string())),
  requirementsVersion: s.defaulted(s.int(), 1),
  checks: s.optional(s.array(s.lazy(() => requirementCheckSchema))),
  canOverride: s.defaulted(s.boolean(), true),
  hasRequirements: s.defaulted(s.boolean(), true),
  evaluatedAt: s.dateTime(),
  _keysMap: {
    candidateCount: "candidate_count",
    evaluatedTraceIds: "evaluated_trace_ids",
    requirementsVersion: "requirements_version",
    canOverride: "can_override",
    hasRequirements: "has_requirements",
    evaluatedAt: "evaluated_at",
  },
};

export const readyRequirementsEvaluationInternalSchema: Schema<ReadyRequirementsEvaluation> =
  s.object<ReadyRequirementsEvaluation>(readyRequirementsEvaluationProperties, {
    additionalProperties: s.json(),
  });

export const readyRequirementsEvaluationSchema: Schema<ReadyRequirementsEvaluation> = s.lazySchema(() =>
  s.object<ReadyRequirementsEvaluation>(
    {
      ...readyRequirementsEvaluationProperties,
      k: s.int().check(s.gte(0)),
      candidateCount: s.int().check(s.gte(0)),
    },
    { additionalProperties: s.json() },
  ),
);
