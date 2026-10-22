import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** List of recording URLs */
export type Recordings = string[];

export const recordingsSchema: Schema<Recordings> = s.of<Recordings>(s.union([s.array(s.string())]));
