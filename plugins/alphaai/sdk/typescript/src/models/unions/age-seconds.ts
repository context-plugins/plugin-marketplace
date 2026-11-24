import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type AgeSeconds = number;

export const ageSecondsSchema: Schema<AgeSeconds> = s.of<AgeSeconds>(s.union([s.int()]));
