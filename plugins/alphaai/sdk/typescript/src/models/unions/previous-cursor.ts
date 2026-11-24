import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type PreviousCursor = string;

export const previousCursorSchema: Schema<PreviousCursor> = s.of<PreviousCursor>(s.union([s.string()]));
