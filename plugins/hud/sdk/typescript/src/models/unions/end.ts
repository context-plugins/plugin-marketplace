import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Window end; defaults to now */
export type End = Date;

export const endSchema: Schema<End> = s.of<End>(s.union([s.dateTime()]));
