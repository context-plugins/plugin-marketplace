import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Indicates whether a stopover is allowed on this ticket. */
export type StopOver = boolean;

export const stopOverSchema: Schema<StopOver> = s.of<StopOver>(s.union([s.boolean()]));
