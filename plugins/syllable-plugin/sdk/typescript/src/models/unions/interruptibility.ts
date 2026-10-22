import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Interruptibility setting for user input.Valid values: none, dtmf_only, speech_only, all */
export type Interruptibility = string;

export const interruptibilitySchema: Schema<Interruptibility> = s.of<Interruptibility>(s.union([s.string()]));
