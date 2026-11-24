import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { taskStateSchema, type TaskState } from "./task-state.js";
import { briefSchema, type Brief } from "./unions/brief.js";
import { buildIdSchema, type BuildId } from "./unions/build-id.js";
import { environmentSchema, type Environment } from "./unions/environment.js";
import { internallyReviewedAtSchema, type InternallyReviewedAt } from "./unions/internally-reviewed-at.js";
import { internallyReviewedBySchema, type InternallyReviewedBy } from "./unions/internally-reviewed-by.js";
import { lifecycleStageSchema, type LifecycleStage } from "./unions/lifecycle-stage.js";
import {
  previousReviewDecisionVersionNumberSchema,
  type PreviousReviewDecisionVersionNumber,
} from "./unions/previous-review-decision-version-number.js";
import {
  previousReviewDecisionSchema,
  type PreviousReviewDecision,
} from "./unions/previous-review-decision.js";
import { revisionRequestedAtSchema, type RevisionRequestedAt } from "./unions/revision-requested-at.js";
import { scenarioIdSchema, type ScenarioId } from "./unions/scenario-id.js";
import { scenarioNameSchema, type ScenarioName } from "./unions/scenario-name.js";
import { scenarioSchema, type Scenario } from "./unions/scenario.js";
import { systemPromptSchema, type SystemPrompt } from "./unions/system-prompt.js";
import { validationSchema, type Validation } from "./unions/validation.js";

export type TaskVersionResponse = {
  id: string;
  taskId: string;
  scenarioId?: ScenarioId;
  buildId?: BuildId;
  scenarioName?: ScenarioName;
  version: number;
  validation?: Validation;
  scenarioArgs?: Record<string, unknown>;
  systemPrompt?: SystemPrompt;
  agentConfig?: Record<string, unknown>;
  metadata?: Record<string, unknown>;
  /** @default "active" */
  status?: string;
  /**
   * Canonical task workflow state.
   *
   * Lives in the kernel so both the DB layer (orm.py pg enum) and the decision core (tasks.state)
   * depend downward on it.
   */
  currentState?: TaskState;
  lifecycleStage?: LifecycleStage;
  brief?: Brief;
  internallyReviewedAt?: InternallyReviewedAt;
  internallyReviewedBy?: InternallyReviewedBy;
  previousReviewDecision?: PreviousReviewDecision;
  previousReviewDecisionVersionNumber?: PreviousReviewDecisionVersionNumber;
  revisionRequestedAt?: RevisionRequestedAt;
  scenario?: Scenario;
  environment?: Environment;
  createdAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskVersionResponseSchema: Schema<TaskVersionResponse> = s.object<TaskVersionResponse>(
  {
    id: s.string(),
    taskId: s.string(),
    scenarioId: s.optional(s.lazy(() => scenarioIdSchema)),
    buildId: s.optional(s.lazy(() => buildIdSchema)),
    scenarioName: s.optional(s.lazy(() => scenarioNameSchema)),
    version: s.int(),
    validation: s.optional(s.lazy(() => validationSchema)),
    scenarioArgs: s.optional(s.record(s.string(), s.unknown())),
    systemPrompt: s.optional(s.lazy(() => systemPromptSchema)),
    agentConfig: s.optional(s.record(s.string(), s.unknown())),
    metadata: s.optional(s.record(s.string(), s.unknown())),
    status: s.defaulted(s.string(), "active"),
    currentState: s.optional(s.lazy(() => taskStateSchema)),
    lifecycleStage: s.optional(s.lazy(() => lifecycleStageSchema)),
    brief: s.optional(s.lazy(() => briefSchema)),
    internallyReviewedAt: s.optional(s.lazy(() => internallyReviewedAtSchema)),
    internallyReviewedBy: s.optional(s.lazy(() => internallyReviewedBySchema)),
    previousReviewDecision: s.optional(s.lazy(() => previousReviewDecisionSchema)),
    previousReviewDecisionVersionNumber: s.optional(s.lazy(() => previousReviewDecisionVersionNumberSchema)),
    revisionRequestedAt: s.optional(s.lazy(() => revisionRequestedAtSchema)),
    scenario: s.optional(s.lazy(() => scenarioSchema)),
    environment: s.optional(s.lazy(() => environmentSchema)),
    createdAt: s.dateTime(),
    _keysMap: {
      taskId: "task_id",
      scenarioId: "scenario_id",
      buildId: "build_id",
      scenarioName: "scenario_name",
      scenarioArgs: "scenario_args",
      systemPrompt: "system_prompt",
      agentConfig: "agent_config",
      currentState: "current_state",
      lifecycleStage: "lifecycle_stage",
      internallyReviewedAt: "internally_reviewed_at",
      internallyReviewedBy: "internally_reviewed_by",
      previousReviewDecision: "previous_review_decision",
      previousReviewDecisionVersionNumber: "previous_review_decision_version_number",
      revisionRequestedAt: "revision_requested_at",
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
