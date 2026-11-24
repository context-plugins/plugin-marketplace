import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Mode = string;

export const modeSchema: Schema<Mode> = s.of<Mode>(s.union([s.string()]));
