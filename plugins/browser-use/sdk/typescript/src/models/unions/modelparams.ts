import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Modelparams = Record<string, unknown>;

export const modelparamsSchema: Schema<Modelparams> = s.of<Modelparams>(
  s.union([s.record(s.string(), s.unknown())]),
);
