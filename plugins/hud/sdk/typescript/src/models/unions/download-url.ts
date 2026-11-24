import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type DownloadUrl = string;

export const downloadUrlSchema: Schema<DownloadUrl> = s.of<DownloadUrl>(s.union([s.string()]));
