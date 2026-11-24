import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type TrajectoryId = string;

export const trajectoryIdSchema: Schema<TrajectoryId> = s.of<TrajectoryId>(s.union([s.string()]));
