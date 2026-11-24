import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ScenarioCount = number;

export const scenarioCountSchema: Schema<ScenarioCount> = s.of<ScenarioCount>(s.union([s.int()]));
