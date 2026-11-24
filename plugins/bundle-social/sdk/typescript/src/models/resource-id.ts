import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ResourceId = {
  kind?: string;
  videoId?: string;
  playlistId?: string;
  channelId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resourceIdSchema: Schema<ResourceId> = s.object<ResourceId>(
  {
    kind: s.optional(s.string()),
    videoId: s.optional(s.string()),
    playlistId: s.optional(s.string()),
    channelId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
