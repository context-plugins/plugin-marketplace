import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Since = string | Date;

export const sinceSchema: Schema<Since> = s.of<Since>(s.union([s.dateOnly(), s.dateTime()]));
