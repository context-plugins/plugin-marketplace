import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Instructions = string;

export const instructionsSchema: Schema<Instructions> = s.of<Instructions>(s.union([s.string()]));
