import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type StartedAt = number | string;

export const startedAtSchema: Schema<StartedAt> = s.of<StartedAt>(s.union([s.float64(), s.string()]));
