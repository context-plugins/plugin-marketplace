import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./unions/error.js";
import { rewardSchema, type Reward } from "./unions/reward.js";
import {
  statusHudPlatformInstancesApiSchema,
  type StatusHudPlatformInstancesApi,
} from "./unions/status-hud-platform-instances-api.js";
import { thumbnailUrlSchema, type ThumbnailUrl } from "./unions/thumbnail-url.js";

export type ActiveInstanceTrace = {
  id: string;
  status?: StatusHudPlatformInstancesApi;
  reward?: Reward;
  createdAt: Date;
  thumbnailUrl?: ThumbnailUrl;
  error?: Error;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const activeInstanceTraceSchema: Schema<ActiveInstanceTrace> = s.object<ActiveInstanceTrace>(
  {
    id: s.string(),
    status: s.optional(s.lazy(() => statusHudPlatformInstancesApiSchema)),
    reward: s.optional(s.lazy(() => rewardSchema)),
    createdAt: s.dateTime(),
    thumbnailUrl: s.optional(s.lazy(() => thumbnailUrlSchema)),
    error: s.optional(s.lazy(() => errorSchema)),
    _keysMap: {
      createdAt: "created_at",
      thumbnailUrl: "thumbnail_url",
    },
  },
  { additionalProperties: s.json() },
);
