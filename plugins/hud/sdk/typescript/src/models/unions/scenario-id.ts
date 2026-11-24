import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Only tasksets with a live task whose latest version uses this scenario */
export type ScenarioId = string;

export const scenarioIdSchema: Schema<ScenarioId> = s.of<ScenarioId>(s.union([s.string()]));
