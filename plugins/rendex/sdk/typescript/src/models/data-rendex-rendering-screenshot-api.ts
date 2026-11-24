import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { format1Schema, type Format1 } from "./format1.js";
import { qualitySchema, type Quality } from "./quality.js";

export type DataRendexRenderingScreenshotApi = {
  /** Base64-encoded screenshot image */
  image?: string;
  /** MIME type of the image */
  contentType?: string;
  /** Captured URL */
  url?: string;
  /** Viewport width used */
  width?: number;
  /** Viewport height used */
  height?: number;
  format?: Format1;
  /** Image size in bytes */
  bytesSize?: number;
  /** ISO 8601 timestamp of capture */
  capturedAt?: Date;
  /** Capture quality signal */
  quality?: Quality;
  /** Navigation strategy that succeeded */
  waitStrategy?: string;
  /** Page load time in milliseconds */
  loadTimeMs?: number;
  /** Whether full-page capture was height-capped */
  truncated?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const dataRendexRenderingScreenshotApiProperties: s.Shape<DataRendexRenderingScreenshotApi> = {
  image: s.optional(s.string()),
  contentType: s.optional(s.string()),
  url: s.optional(s.string()),
  width: s.optional(s.int()),
  height: s.optional(s.int()),
  format: s.optional(s.lazy(() => format1Schema)),
  bytesSize: s.optional(s.int()),
  capturedAt: s.optional(s.dateTime()),
  quality: s.optional(s.lazy(() => qualitySchema)),
  waitStrategy: s.optional(s.string()),
  loadTimeMs: s.optional(s.int()),
  truncated: s.optional(s.boolean()),
};

export const dataRendexRenderingScreenshotApiInternalSchema: Schema<DataRendexRenderingScreenshotApi> =
  s.object<DataRendexRenderingScreenshotApi>(dataRendexRenderingScreenshotApiProperties, {
    additionalProperties: s.json(),
  });

export const dataRendexRenderingScreenshotApiSchema: Schema<DataRendexRenderingScreenshotApi> = s.lazySchema(
  () =>
    s.object<DataRendexRenderingScreenshotApi>(
      {
        ...dataRendexRenderingScreenshotApiProperties,
        url: s.optional(s.string().check(s.url())),
      },
      { additionalProperties: s.json() },
    ),
);
