import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ScenarioDescription = string;

export const scenarioDescriptionSchema: Schema<ScenarioDescription> = s.of<ScenarioDescription>(
  s.union([s.string()]),
);
