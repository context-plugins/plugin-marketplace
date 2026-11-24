import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The unique IDs of the tags assigned to the short link., The unique IDs of the tags assigned to
 * the QR code.
 */
export type TagIds = string | string[];

export const tagIdsSchema: Schema<TagIds> = s.of<TagIds>(s.union([s.string(), s.array(s.string())]));
