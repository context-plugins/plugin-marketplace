import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Return any deleted payment service. */
export type Deleted = boolean;

export const deletedSchema: Schema<Deleted> = s.of<Deleted>(s.union([s.boolean()]));
