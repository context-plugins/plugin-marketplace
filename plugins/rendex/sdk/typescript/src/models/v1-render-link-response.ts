import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  data1RendexRenderingScreenshotApiSchema,
  type Data1RendexRenderingScreenshotApi,
} from "./data1-rendex-rendering-screenshot-api.js";

export type V1RenderLinkResponse = {
  success?: boolean;
  data?: Data1RendexRenderingScreenshotApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1RenderLinkResponseSchema: Schema<V1RenderLinkResponse> = s.object<V1RenderLinkResponse>(
  {
    success: s.optional(s.boolean()),
    data: s.optional(s.lazy(() => data1RendexRenderingScreenshotApiSchema)),
  },
  { additionalProperties: s.json() },
);
