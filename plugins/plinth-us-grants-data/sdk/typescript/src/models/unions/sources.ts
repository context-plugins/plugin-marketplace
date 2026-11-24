import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Sources = Record<string, unknown>;

export const sourcesSchema: Schema<Sources> = s.of<Sources>(s.union([s.record(s.string(), s.unknown())]));
