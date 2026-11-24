import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { modelTaskScorePointSchema, type ModelTaskScorePoint } from "./model-task-score-point.js";
import { avgScoreSchema, type AvgScore } from "./unions/avg-score.js";
import { maxTracesPerTaskSchema, type MaxTracesPerTask } from "./unions/max-traces-per-task.js";
import { minTracesPerTaskSchema, type MinTracesPerTask } from "./unions/min-traces-per-task.js";
import { purpose1Schema, type Purpose1 } from "./unions/purpose1.js";

/** A model's performance on one taskset, aggregated from its graded traces. */
export type ModelTasksetResultRow = {
  tasksetId: string;
  tasksetName: string;
  isPublic: boolean;
  purpose?: Purpose1;
  totalTasks: number;
  tasksWithTraces: number;
  avgScore: AvgScore;
  tasksInRange099: number;
  tasksInRange575: number;
  tasksInRange1540: number;
  minTracesPerTask: MinTracesPerTask;
  maxTracesPerTask: MaxTracesPerTask;
  perTaskScores: ModelTaskScorePoint[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const modelTasksetResultRowSchema: Schema<ModelTasksetResultRow> = s.object<ModelTasksetResultRow>(
  {
    tasksetId: s.string(),
    tasksetName: s.string(),
    isPublic: s.boolean(),
    purpose: s.optional(s.lazy(() => purpose1Schema)),
    totalTasks: s.int(),
    tasksWithTraces: s.int(),
    avgScore: avgScoreSchema,
    tasksInRange099: s.int(),
    tasksInRange575: s.int(),
    tasksInRange1540: s.int(),
    minTracesPerTask: minTracesPerTaskSchema,
    maxTracesPerTask: maxTracesPerTaskSchema,
    perTaskScores: s.array(s.lazy(() => modelTaskScorePointSchema)),
    _keysMap: {
      tasksetId: "taskset_id",
      tasksetName: "taskset_name",
      isPublic: "is_public",
      totalTasks: "total_tasks",
      tasksWithTraces: "tasks_with_traces",
      avgScore: "avg_score",
      tasksInRange099: "tasks_in_range_0_99",
      tasksInRange575: "tasks_in_range_5_75",
      tasksInRange1540: "tasks_in_range_15_40",
      minTracesPerTask: "min_traces_per_task",
      maxTracesPerTask: "max_traces_per_task",
      perTaskScores: "per_task_scores",
    },
  },
  { additionalProperties: s.json() },
);
