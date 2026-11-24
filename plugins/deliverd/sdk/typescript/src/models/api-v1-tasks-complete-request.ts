import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  decisionDeliverdDevTasksApiInternalSchema,
  decisionDeliverdDevTasksApiSchema,
  type DecisionDeliverdDevTasksApi,
} from "./decision-deliverd-dev-tasks-api.js";
import {
  findingDeliverdDevTasksApiInternalSchema,
  findingDeliverdDevTasksApiSchema,
  type FindingDeliverdDevTasksApi,
} from "./finding-deliverd-dev-tasks-api.js";

export type ApiV1TasksCompleteRequest = {
  /** What was found, in a few sentences */
  summary: string;
  findings?: FindingDeliverdDevTasksApi[];
  /** Decisions you propose. They reach the parent as suggestions; a person confirms them */
  decisions?: DecisionDeliverdDevTasksApi[];
  recommendations?: string[];
  /** Still open; added to the parent's open questions when applied */
  unresolvedQuestions?: string[];
  /** What this means for the main task */
  parentImpact?: string;
  /** Becomes the parent's next action when applied */
  suggestedNextAction?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1TasksCompleteRequestProperties: s.Shape<ApiV1TasksCompleteRequest> = {
  summary: s.string(),
  findings: s.optional(s.array(s.lazy(() => findingDeliverdDevTasksApiInternalSchema))),
  decisions: s.optional(s.array(s.lazy(() => decisionDeliverdDevTasksApiInternalSchema))),
  recommendations: s.optional(s.array(s.string())),
  unresolvedQuestions: s.optional(s.array(s.string())),
  parentImpact: s.optional(s.string()),
  suggestedNextAction: s.optional(s.string()),
};

export const apiV1TasksCompleteRequestInternalSchema: Schema<ApiV1TasksCompleteRequest> =
  s.object<ApiV1TasksCompleteRequest>(apiV1TasksCompleteRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1TasksCompleteRequestSchema: Schema<ApiV1TasksCompleteRequest> = s.lazySchema(() =>
  s.object<ApiV1TasksCompleteRequest>(
    {
      ...apiV1TasksCompleteRequestProperties,
      summary: s.string().check(s.minLength(1), s.maxLength(4000)),
      findings: s.optional(s.array(s.lazy(() => findingDeliverdDevTasksApiSchema)).check(s.maxLength(20))),
      decisions: s.optional(s.array(s.lazy(() => decisionDeliverdDevTasksApiSchema)).check(s.maxLength(10))),
      recommendations: s.optional(
        s.array(s.string().check(s.minLength(1), s.maxLength(1000))).check(s.maxLength(10)),
      ),
      unresolvedQuestions: s.optional(
        s.array(s.string().check(s.minLength(1), s.maxLength(500))).check(s.maxLength(10)),
      ),
      parentImpact: s.optional(s.string().check(s.maxLength(2000))),
      suggestedNextAction: s.optional(s.string().check(s.maxLength(500))),
    },
    { additionalProperties: s.json() },
  ),
);
