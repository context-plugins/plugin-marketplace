import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Whether passive speech input is enabled (input while assistant is speaking) */
export type PassiveSpeechInputEnabled = boolean;

export const passiveSpeechInputEnabledSchema: Schema<PassiveSpeechInputEnabled> =
  s.of<PassiveSpeechInputEnabled>(s.union([s.boolean()]));
