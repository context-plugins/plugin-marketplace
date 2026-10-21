import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { errorSchema, type Error } from "./error.js";
import { limitsSchema, type Limits } from "./limits.js";
import { noticeSchema, type Notice } from "./notice.js";

export type RateLimitedResponse = {
  /**
   * Details of an error, including a coarse category for retry logic, a stable error code, and a
   * human-readable message.
   */
  error: Error;
  /** Rate limit information for the account's add-on quotas. */
  limits?: Limits;
  /**
   * Tips and guidance attached to the response to help you get the most out of the generation. Each
   * entry is plain text you can show to a user or act on as-is. Omitted when there is nothing to
   * add.
   */
  notices?: Notice[];
  /** Unique identifier for this request, for correlation and support. */
  requestId: string;
};

export const rateLimitedResponseSchema: Schema<RateLimitedResponse> = s.object<RateLimitedResponse>({
  error: errorSchema,
  limits: s.optional(s.lazy(() => limitsSchema)),
  notices: s.optional(s.array(s.lazy(() => noticeSchema))),
  requestId: s.string(),
  _keysMap: {
    requestId: "request_id",
  },
});
