import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Checkpoint = Record<string, unknown>;

export const checkpointSchema: Schema<Checkpoint> = s.of<Checkpoint>(
  s.union([s.record(s.string(), s.unknown())]),
);
