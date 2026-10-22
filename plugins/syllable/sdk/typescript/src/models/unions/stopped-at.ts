import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** When the experiment stopped */
export type StoppedAt = Date;

export const stoppedAtSchema: Schema<StoppedAt> = s.of<StoppedAt>(s.union([s.dateTime()]));
