import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1WebscreenshotsRequest = {
  /** The URL of the web page to capture the screenshot (e.g., https://example.com) */
  url: string;
  /** The image format for the screenshot */
  type?: string;
  /** The width of the screenshot in pixels (e.g., 1920). Must be between 100 and 3840 */
  width?: number;
  /** The height of the screenshot in pixels (e.g., 1080). Must be between 100 and 3840 */
  height?: number;
  /** Whether to capture the full page screenshot (true or false) */
  fullpage?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1WebscreenshotsRequestSchema: Schema<V1WebscreenshotsRequest> =
  s.object<V1WebscreenshotsRequest>(
    {
      url: s.string(),
      type: s.optional(s.string()),
      width: s.optional(s.float64()),
      height: s.optional(s.float64()),
      fullpage: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
