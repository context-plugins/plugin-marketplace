import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** When the endpoint was last updated. */
export type UpdatedAt = Date;

export const updatedAtSchema: Schema<UpdatedAt> = s.of<UpdatedAt>(s.union([s.dateTime()]));
