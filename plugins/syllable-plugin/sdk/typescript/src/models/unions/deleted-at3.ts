import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The timestamp when the IP was deleted */
export type DeletedAt3 = Date;

export const deletedAt3Schema: Schema<DeletedAt3> = s.of<DeletedAt3>(s.union([s.dateTime()]));
