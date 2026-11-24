import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Reviewed = boolean;

export const reviewedSchema: Schema<Reviewed> = s.of<Reviewed>(s.union([s.boolean()]));
