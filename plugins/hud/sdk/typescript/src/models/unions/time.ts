import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Time = string;

export const timeSchema: Schema<Time> = s.of<Time>(s.union([s.string()]));
