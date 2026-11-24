import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ScreenshotUrl = string;

export const screenshotUrlSchema: Schema<ScreenshotUrl> = s.of<ScreenshotUrl>(s.union([s.string()]));
