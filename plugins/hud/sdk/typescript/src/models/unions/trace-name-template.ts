import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type TraceNameTemplate = string;

export const traceNameTemplateSchema: Schema<TraceNameTemplate> = s.of<TraceNameTemplate>(
  s.union([s.string()]),
);
