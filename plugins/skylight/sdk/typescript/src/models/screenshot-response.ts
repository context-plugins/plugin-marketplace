import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ScreenshotResponse = {
  /** Base64-encoded JPEG image of the instance screenshot */
  image: string;
};

export const screenshotResponseSchema: Schema<ScreenshotResponse> = s.object<ScreenshotResponse>({
  image: s.string(),
});
