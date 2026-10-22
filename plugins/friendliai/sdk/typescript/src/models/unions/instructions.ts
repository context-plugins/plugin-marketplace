import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** A system (or developer) message inserted into the model's context. */
export type Instructions = string;

export const instructionsSchema: Schema<Instructions> = s.of<Instructions>(s.union([s.string()]));
