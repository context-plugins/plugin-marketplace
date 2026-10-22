import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Extension to which the user will be transferred if they call at the provided timestamp in the
 * given language, or a status message if no rules match
 */
export type Extension = string;

export const extensionSchema: Schema<Extension> = s.of<Extension>(s.union([s.string()]));
