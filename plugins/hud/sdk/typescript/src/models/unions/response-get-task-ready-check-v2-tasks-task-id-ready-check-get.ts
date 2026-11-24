import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  readyRequirementsEvaluationInternalSchema,
  readyRequirementsEvaluationSchema,
  type ReadyRequirementsEvaluation,
} from "../ready-requirements-evaluation.js";
import {
  readyRequirementsNotConfiguredSchema,
  type ReadyRequirementsNotConfigured,
} from "../ready-requirements-not-configured.js";

export type ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet =
  | ReadyRequirementsEvaluation
  | ReadyRequirementsNotConfigured;

export const responseGetTaskReadyCheckV2TasksTaskIdReadyCheckGetInternalSchema: Schema<ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet> =
  s.of<ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet>(
    s.union([
      s.lazy(() => readyRequirementsEvaluationInternalSchema),
      s.lazy(() => readyRequirementsNotConfiguredSchema),
    ]),
  );

export const responseGetTaskReadyCheckV2TasksTaskIdReadyCheckGetSchema: Schema<ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet> =
  s.lazySchema(() =>
    s.of<ResponseGetTaskReadyCheckV2TasksTaskIdReadyCheckGet>(
      s.union([
        s.lazy(() => readyRequirementsEvaluationSchema),
        s.lazy(() => readyRequirementsNotConfiguredSchema),
      ]),
    ),
  );
