import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** ISO 8601 end datetime (exclusive) for created_at filtering */
export type EndDatetime18 = string;

export const endDatetime18Schema: Schema<EndDatetime18> = s.of<EndDatetime18>(s.union([s.string()]));
