import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RepliesRequest = {
  message: string;
  accessToken: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const repliesRequestSchema: Schema<RepliesRequest> = s.object<RepliesRequest>(
  {
    message: s.string(),
    accessToken: s.string(),
    _keysMap: {
      accessToken: "access_token",
    },
  },
  { additionalProperties: s.json() },
);
