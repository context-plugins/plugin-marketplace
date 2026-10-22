import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** ISO 8601 start datetime (inclusive) for created_at filtering */
export type StartDatetime18 = string;

export const startDatetime18Schema: Schema<StartDatetime18> = s.of<StartDatetime18>(s.union([s.string()]));
