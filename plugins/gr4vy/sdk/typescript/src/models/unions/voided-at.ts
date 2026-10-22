import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The date this transaction was voided at. */
export type VoidedAt = Date;

export const voidedAtSchema: Schema<VoidedAt> = s.of<VoidedAt>(s.union([s.dateTime()]));
