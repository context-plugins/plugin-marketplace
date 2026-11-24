import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ScenarioName = string;

export const scenarioNameSchema: Schema<ScenarioName> = s.of<ScenarioName>(s.union([s.string()]));
