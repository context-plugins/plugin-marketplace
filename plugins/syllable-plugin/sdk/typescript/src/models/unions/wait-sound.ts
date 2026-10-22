import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Sound to play while waiting for a response from the LLM. */
export type WaitSound = string;

export const waitSoundSchema: Schema<WaitSound> = s.of<WaitSound>(s.union([s.string()]));
