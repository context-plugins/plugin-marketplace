import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Licence the source data is published under, where it carries one. Absent for public-domain
 * sources.
 */
export type License = string;

export const licenseSchema: Schema<License> = s.of<License>(s.union([s.string()]));
