import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type SelectedVoice = string[];

export const selectedVoiceSchema: Schema<SelectedVoice> = s.of<SelectedVoice>(s.union([s.array(s.string())]));
