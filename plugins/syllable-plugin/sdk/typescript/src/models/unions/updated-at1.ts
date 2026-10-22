import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The timestamp when the range was last updated */
export type UpdatedAt1 = Date;

export const updatedAt1Schema: Schema<UpdatedAt1> = s.of<UpdatedAt1>(s.union([s.dateTime()]));
