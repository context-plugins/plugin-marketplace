import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type MaxSessionSeconds = number;

export const maxSessionSecondsSchema: Schema<MaxSessionSeconds> = s.of<MaxSessionSeconds>(s.union([s.int()]));
