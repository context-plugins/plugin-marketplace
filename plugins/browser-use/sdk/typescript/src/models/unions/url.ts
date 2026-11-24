import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Presigned download URL (15 min expiry). Only included when `includeUrls=true`., Presigned
 * download URL (60s expiry). Only included when `includeUrls=true`.
 */
export type Url = string;

export const urlSchema: Schema<Url> = s.of<Url>(s.union([s.string()]));
