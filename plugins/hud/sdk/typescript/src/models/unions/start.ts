import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Window start; defaults to end-7d */
export type Start = Date;

export const startSchema: Schema<Start> = s.of<Start>(s.union([s.dateTime()]));
