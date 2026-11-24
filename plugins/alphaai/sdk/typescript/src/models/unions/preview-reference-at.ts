import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type PreviewReferenceAt = Date;

export const previewReferenceAtSchema: Schema<PreviewReferenceAt> = s.of<PreviewReferenceAt>(
  s.union([s.dateTime()]),
);
