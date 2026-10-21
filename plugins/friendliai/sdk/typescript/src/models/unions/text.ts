import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The transcribed text. */
export type Text = string;

export const textSchema: Schema<Text> = s.of<Text>(s.union([s.string()]));
