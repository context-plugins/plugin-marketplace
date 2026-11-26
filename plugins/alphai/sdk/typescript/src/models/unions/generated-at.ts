import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type GeneratedAt = Date;

export const generatedAtSchema: Schema<GeneratedAt> = s.of<GeneratedAt>(s.union([s.dateTime()]));
