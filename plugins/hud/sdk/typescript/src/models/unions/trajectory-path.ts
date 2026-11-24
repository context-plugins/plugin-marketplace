import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type TrajectoryPath = string;

export const trajectoryPathSchema: Schema<TrajectoryPath> = s.of<TrajectoryPath>(s.union([s.string()]));
