import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CommentsRequest = {
  /** The comment text */
  message: string;
  /** URL of an image to include with the comment */
  attachmentUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const commentsRequestProperties: s.Shape<CommentsRequest> = {
  message: s.string(),
  attachmentUrl: s.optional(s.string()),
  _keysMap: {
    attachmentUrl: "attachment_url",
  },
};

export const commentsRequestInternalSchema: Schema<CommentsRequest> = s.object<CommentsRequest>(
  commentsRequestProperties,
  { additionalProperties: s.json() },
);

export const commentsRequestSchema: Schema<CommentsRequest> = s.lazySchema(() =>
  s.object<CommentsRequest>(
    {
      ...commentsRequestProperties,
      attachmentUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
