import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The timestamp when the range was created */
export type CreatedAt1 = Date;

export const createdAt1Schema: Schema<CreatedAt1> = s.of<CreatedAt1>(s.union([s.dateTime()]));
