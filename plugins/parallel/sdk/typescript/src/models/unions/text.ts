import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The text payload, when the part carries one. */
export type Text = string;

export const textSchema: Schema<Text> = s.of<Text>(s.union([s.string()]));
