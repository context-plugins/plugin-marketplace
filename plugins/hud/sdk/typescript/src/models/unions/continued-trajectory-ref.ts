import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ContinuedTrajectoryRef = string;

export const continuedTrajectoryRefSchema: Schema<ContinuedTrajectoryRef> = s.of<ContinuedTrajectoryRef>(
  s.union([s.string()]),
);
