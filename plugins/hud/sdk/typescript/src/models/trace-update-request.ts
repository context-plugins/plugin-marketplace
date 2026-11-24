import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { descriptionSchema, type Description } from "./unions/description.js";
import {
  nameHudPlatformJobsApiSchema,
  type NameHudPlatformJobsApi,
} from "./unions/name-hud-platform-jobs-api.js";

export type TraceUpdateRequest = {
  name?: NameHudPlatformJobsApi;
  description?: Description;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const traceUpdateRequestSchema: Schema<TraceUpdateRequest> = s.object<TraceUpdateRequest>(
  {
    name: s.optional(s.lazy(() => nameHudPlatformJobsApiSchema)),
    description: s.optional(s.lazy(() => descriptionSchema)),
  },
  { additionalProperties: s.json() },
);
