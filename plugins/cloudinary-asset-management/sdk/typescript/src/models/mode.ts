import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The method for generating and delivering the archive. Options: download - Generates and delivers
 * the archive file without storing it create - Creates and stores the archive as a raw asset,
 * returning URLs in the response create_and_download - Creates, stores, and delivers the archive
 * file
 */
export const Mode = {
  Download: "download",
  Create: "create",
  CreateAndDownload: "create_and_download",
} as const;
export type Mode = (typeof Mode)[keyof typeof Mode] | (string & {});

export const modeSchema: EnumSchema<Mode> = s.enumOf<Mode>(Mode);
