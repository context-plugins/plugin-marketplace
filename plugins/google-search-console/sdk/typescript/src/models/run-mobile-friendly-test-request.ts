import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Mobile-friendly test request. */
export type RunMobileFriendlyTestRequest = {
  /** URL for inspection. */
  url?: string;
  /** Whether or not screenshot is requested. Default is false. */
  requestScreenshot?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const runMobileFriendlyTestRequestSchema: Schema<RunMobileFriendlyTestRequest> =
  s.object<RunMobileFriendlyTestRequest>(
    {
      url: s.optional(s.string()),
      requestScreenshot: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
