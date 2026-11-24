import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ThumbnailAscii = string;

export const thumbnailAsciiSchema: Schema<ThumbnailAscii> = s.of<ThumbnailAscii>(s.union([s.string()]));
