import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ThumbnailUrl = string;

export const thumbnailUrlSchema: Schema<ThumbnailUrl> = s.of<ThumbnailUrl>(s.union([s.string()]));
