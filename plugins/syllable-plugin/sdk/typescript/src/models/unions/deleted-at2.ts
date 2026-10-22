import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** When the contact was deleted, if deleted */
export type DeletedAt2 = Date;

export const deletedAt2Schema: Schema<DeletedAt2> = s.of<DeletedAt2>(s.union([s.dateTime()]));
