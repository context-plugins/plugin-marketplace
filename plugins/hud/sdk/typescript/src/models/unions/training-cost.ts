import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { trainingCostInfoSchema, type TrainingCostInfo } from "../training-cost-info.js";

export type TrainingCost = TrainingCostInfo;

export const trainingCostSchema: Schema<TrainingCost> = s.of<TrainingCost>(
  s.union([s.lazy(() => trainingCostInfoSchema)]),
);
