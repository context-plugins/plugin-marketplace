import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { taskScenarioBriefSchema, type TaskScenarioBrief } from "../task-scenario-brief.js";

export type Scenario = TaskScenarioBrief;

export const scenarioSchema: Schema<Scenario> = s.of<Scenario>(
  s.union([s.lazy(() => taskScenarioBriefSchema)]),
);
