import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type SourceWatermark = Date;

export const sourceWatermarkSchema: Schema<SourceWatermark> = s.of<SourceWatermark>(s.union([s.dateTime()]));
