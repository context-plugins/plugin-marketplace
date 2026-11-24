import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Request body for adding a comment to a support ticket. */
export type CreateCommentRequest = {
  /** The text content of the comment. Must not be empty. */
  body: string;
  /**
   * If true, creates a private internal note. Only honored for DoiT employees; ignored for
   * customers.
   *
   * @default false
   */
  private?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createCommentRequestSchema: Schema<CreateCommentRequest> = s.object<CreateCommentRequest>(
  {
    body: s.string(),
    private: s.defaulted(s.boolean(), false),
  },
  { additionalProperties: s.json() },
);
