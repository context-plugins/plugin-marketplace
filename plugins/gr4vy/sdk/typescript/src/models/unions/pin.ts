import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The PIN for this gift card. */
export type Pin = string;

export const pinSchema: Schema<Pin> = s.of<Pin>(s.union([s.string()]));
