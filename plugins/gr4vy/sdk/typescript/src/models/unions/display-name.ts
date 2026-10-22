import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The display name for the API key pair. */
export type DisplayName = string;

export const displayNameSchema: Schema<DisplayName> = s.of<DisplayName>(s.union([s.string()]));
