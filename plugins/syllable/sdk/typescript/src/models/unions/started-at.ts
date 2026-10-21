import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** When the experiment started */
export type StartedAt = Date;

export const startedAtSchema: Schema<StartedAt> = s.of<StartedAt>(s.union([s.dateTime()]));
