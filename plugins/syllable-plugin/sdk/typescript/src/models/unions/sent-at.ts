import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Timestamp at which request was sent */
export type SentAt = Date;

export const sentAtSchema: Schema<SentAt> = s.of<SentAt>(s.union([s.dateTime()]));
