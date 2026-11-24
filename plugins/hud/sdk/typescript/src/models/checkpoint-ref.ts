import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  nameHudPlatformJobsApiSchema,
  type NameHudPlatformJobsApi,
} from "./unions/name-hud-platform-jobs-api.js";

/** A lightweight reference (id + display name) to a linked entity. */
export type CheckpointRef = {
  id: string;
  name?: NameHudPlatformJobsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const checkpointRefSchema: Schema<CheckpointRef> = s.object<CheckpointRef>(
  {
    id: s.string(),
    name: s.optional(s.lazy(() => nameHudPlatformJobsApiSchema)),
  },
  { additionalProperties: s.json() },
);
