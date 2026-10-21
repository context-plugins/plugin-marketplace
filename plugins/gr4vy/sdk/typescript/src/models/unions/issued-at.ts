import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The date that the ticket was last issued in the airline reservation system. */
export type IssuedAt = Date;

export const issuedAtSchema: Schema<IssuedAt> = s.of<IssuedAt>(s.union([s.dateTime()]));
