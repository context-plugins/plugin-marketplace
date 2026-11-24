import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CommentsRequest = {
  /** The comment text. */
  message: string;
  accessToken: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const commentsRequestSchema: Schema<CommentsRequest> = s.object<CommentsRequest>(
  {
    message: s.string(),
    accessToken: s.string(),
    _keysMap: {
      accessToken: "access_token",
    },
  },
  { additionalProperties: s.json() },
);
