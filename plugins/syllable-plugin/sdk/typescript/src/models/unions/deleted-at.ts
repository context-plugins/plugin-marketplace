import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Timestamp of batch deletion */
export type DeletedAt = Date;

export const deletedAtSchema: Schema<DeletedAt> = s.of<DeletedAt>(s.union([s.dateTime()]));
