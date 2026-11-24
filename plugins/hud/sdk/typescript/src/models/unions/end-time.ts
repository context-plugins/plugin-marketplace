import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type EndTime = Date;

export const endTimeSchema: Schema<EndTime> = s.of<EndTime>(s.union([s.dateTime()]));
