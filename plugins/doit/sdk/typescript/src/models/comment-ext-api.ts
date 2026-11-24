import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { attachmentSchema, type Attachment } from "./attachment.js";

/** A comment on a support ticket. */
export type CommentExtApi = {
  /** Comment ID. */
  id?: number;
  /** The text content of the comment. */
  body?: string;
  /**
   * Whether the comment is public. Always present in new responses, including false for private
   * internal notes. GET reports Zendesk visibility; POST reports the effective visibility of the
   * created comment. Missing metadata in legacy responses or snapshots means unknown and must not
   * be interpreted as false.
   */
  public: boolean;
  /**
   * Stable comment-author attribution. User callers are represented by their verified email
   * address; service-account callers use `sa:<serviceAccountId>`.
   */
  author?: string;
  /** The time when this comment was created, in milliseconds since the epoch. */
  created?: number;
  /** File attachments on the comment. */
  attachments?: Attachment[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const commentExtApiSchema: Schema<CommentExtApi> = s.object<CommentExtApi>(
  {
    id: s.optional(s.int()),
    body: s.optional(s.string()),
    public: s.boolean(),
    author: s.optional(s.string()),
    created: s.optional(s.int()),
    attachments: s.optional(s.array(s.lazy(() => attachmentSchema))),
  },
  { additionalProperties: s.json() },
);
