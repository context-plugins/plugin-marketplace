import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The date this transaction was canceled at. */
export type CanceledAt = Date;

export const canceledAtSchema: Schema<CanceledAt> = s.of<CanceledAt>(s.union([s.dateTime()]));
