import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type TraceName = string;

export const traceNameSchema: Schema<TraceName> = s.of<TraceName>(s.union([s.string()]));
