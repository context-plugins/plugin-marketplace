import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  screenshotRequestInternalSchema,
  screenshotRequestSchema,
  type ScreenshotRequest,
} from "./screenshot-request.js";
import { urlInternalSchema, urlSchema, type Url } from "./url.js";

export type BatchRequest = {
  /** List of URLs to capture (each item can override defaults) */
  urls: Url[];
  /**
   * Provide exactly one of `url`, `html`, or `markdown` (mutually exclusive). If none is provided,
   * the request will fail with a validation error.
   */
  defaults?: ScreenshotRequest;
  /**
   * URL to receive a webhook notification when the batch completes (Starter+ channel; Free/Basic
   * poll GET /v1/batches/{batchId} instead).
   */
  webhookUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const batchRequestProperties: s.Shape<BatchRequest> = {
  urls: s.array(s.lazy(() => urlInternalSchema)),
  defaults: s.optional(s.lazy(() => screenshotRequestInternalSchema)),
  webhookUrl: s.optional(s.string()),
};

export const batchRequestInternalSchema: Schema<BatchRequest> = s.object<BatchRequest>(
  batchRequestProperties,
  { additionalProperties: s.json() },
);

export const batchRequestSchema: Schema<BatchRequest> = s.lazySchema(() =>
  s.object<BatchRequest>(
    {
      ...batchRequestProperties,
      urls: s.array(s.lazy(() => urlSchema)).check(s.minLength(1), s.maxLength(500)),
      defaults: s.optional(s.lazy(() => screenshotRequestSchema)),
      webhookUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
