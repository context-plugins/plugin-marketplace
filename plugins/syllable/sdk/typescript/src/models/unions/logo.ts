import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The organization logo image file to upload. Must be a PNG file and 120x120 pixels. If not
 * provided, the logo will not be updated.
 */
export type Logo = Uint8Array;

export const logoSchema: Schema<Logo> = s.of<Logo>(s.union([s.bytes()]));
