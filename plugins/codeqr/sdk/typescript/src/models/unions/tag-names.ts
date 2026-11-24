import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The unique name of the tags assigned to the short link (case insensitive)., The unique name of
 * the tags assigned to the QR code (case insensitive).
 */
export type TagNames = string | string[];

export const tagNamesSchema: Schema<TagNames> = s.of<TagNames>(s.union([s.string(), s.array(s.string())]));
