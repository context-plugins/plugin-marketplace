import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MediaPublishRequest = {
  /** The container ID from createMediaContainer. */
  creationId: string;
  accessToken: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mediaPublishRequestSchema: Schema<MediaPublishRequest> = s.object<MediaPublishRequest>(
  {
    creationId: s.string(),
    accessToken: s.string(),
    _keysMap: {
      creationId: "creation_id",
      accessToken: "access_token",
    },
  },
  { additionalProperties: s.json() },
);
