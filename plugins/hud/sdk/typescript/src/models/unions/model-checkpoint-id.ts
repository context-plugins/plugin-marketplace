import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ModelCheckpointId = string;

export const modelCheckpointIdSchema: Schema<ModelCheckpointId> = s.of<ModelCheckpointId>(
  s.union([s.string()]),
);
