import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The comma-delimited list of supported modes for the channel, which defines the possible
 * communication methods for channel targets linked to it.
 */
export type SupportedModes = string;

export const supportedModesSchema: Schema<SupportedModes> = s.of<SupportedModes>(s.union([s.string()]));
