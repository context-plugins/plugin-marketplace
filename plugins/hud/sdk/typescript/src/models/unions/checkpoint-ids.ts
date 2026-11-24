import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type CheckpointIds = string;

export const checkpointIdsSchema: Schema<CheckpointIds> = s.of<CheckpointIds>(s.union([s.string()]));
