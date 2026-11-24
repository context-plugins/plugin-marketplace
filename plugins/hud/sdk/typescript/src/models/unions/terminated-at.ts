import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type TerminatedAt = Date;

export const terminatedAtSchema: Schema<TerminatedAt> = s.of<TerminatedAt>(s.union([s.dateTime()]));
