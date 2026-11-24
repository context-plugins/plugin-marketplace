import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type SourceIndexStartedAt = Date;

export const sourceIndexStartedAtSchema: Schema<SourceIndexStartedAt> = s.of<SourceIndexStartedAt>(
  s.union([s.dateTime()]),
);
