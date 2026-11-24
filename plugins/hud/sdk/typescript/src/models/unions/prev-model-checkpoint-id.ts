import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type PrevModelCheckpointId = string;

export const prevModelCheckpointIdSchema: Schema<PrevModelCheckpointId> = s.of<PrevModelCheckpointId>(
  s.union([s.string()]),
);
