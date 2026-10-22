import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The timestamp of the call's end. */
export type EndTime1 = Date;

export const endTime1Schema: Schema<EndTime1> = s.of<EndTime1>(s.union([s.dateTime()]));
