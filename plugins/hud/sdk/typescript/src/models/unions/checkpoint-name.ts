import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type CheckpointName = string;

export const checkpointNameSchema: Schema<CheckpointName> = s.of<CheckpointName>(s.union([s.string()]));
