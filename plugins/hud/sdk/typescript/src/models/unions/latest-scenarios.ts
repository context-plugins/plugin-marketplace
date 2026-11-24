import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { scenarioResponseSchema, type ScenarioResponse } from "../scenario-response.js";

export type LatestScenarios = ScenarioResponse[];

export const latestScenariosSchema: Schema<LatestScenarios> = s.of<LatestScenarios>(
  s.union([s.array(s.lazy(() => scenarioResponseSchema))]),
);
