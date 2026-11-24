import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Until = string | Date;

export const untilSchema: Schema<Until> = s.of<Until>(s.union([s.dateOnly(), s.dateTime()]));
