import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type HiddenProgressStages = string[];

export const hiddenProgressStagesSchema: Schema<HiddenProgressStages> = s.of<HiddenProgressStages>(
  s.union([s.array(s.string())]),
);
