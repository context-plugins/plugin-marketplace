import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Judgement = Record<string, unknown>;

export const judgementSchema: Schema<Judgement> = s.of<Judgement>(
  s.union([s.record(s.string(), s.unknown())]),
);
