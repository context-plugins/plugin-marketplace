import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Data1RendexRenderingScreenshotApi = {
  /** The signed render URL to embed */
  url?: string;
  expiresAt?: Date;
  format?: string;
  cacheTtl?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const data1RendexRenderingScreenshotApiSchema: Schema<Data1RendexRenderingScreenshotApi> =
  s.object<Data1RendexRenderingScreenshotApi>(
    {
      url: s.optional(s.string()),
      expiresAt: s.optional(s.dateTime()),
      format: s.optional(s.string()),
      cacheTtl: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
