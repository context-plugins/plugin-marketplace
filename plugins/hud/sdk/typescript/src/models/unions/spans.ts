import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Spans = Record<string, unknown>[];

export const spansSchema: Schema<Spans> = s.of<Spans>(s.union([s.array(s.record(s.string(), s.unknown()))]));
