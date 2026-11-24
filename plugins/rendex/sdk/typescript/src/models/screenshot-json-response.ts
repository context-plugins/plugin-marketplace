import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataRendexRenderingScreenshotApiInternalSchema,
  dataRendexRenderingScreenshotApiSchema,
  type DataRendexRenderingScreenshotApi,
} from "./data-rendex-rendering-screenshot-api.js";
import { responseMetaSchema, type ResponseMeta } from "./response-meta.js";

export type ScreenshotJsonResponse = {
  success?: boolean;
  data?: DataRendexRenderingScreenshotApi;
  meta?: ResponseMeta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const screenshotJsonResponseProperties: s.Shape<ScreenshotJsonResponse> = {
  success: s.optional(s.boolean()),
  data: s.optional(s.lazy(() => dataRendexRenderingScreenshotApiInternalSchema)),
  meta: s.optional(s.lazy(() => responseMetaSchema)),
};

export const screenshotJsonResponseInternalSchema: Schema<ScreenshotJsonResponse> =
  s.object<ScreenshotJsonResponse>(screenshotJsonResponseProperties, { additionalProperties: s.json() });

export const screenshotJsonResponseSchema: Schema<ScreenshotJsonResponse> = s.lazySchema(() =>
  s.object<ScreenshotJsonResponse>(
    {
      ...screenshotJsonResponseProperties,
      data: s.optional(s.lazy(() => dataRendexRenderingScreenshotApiSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
