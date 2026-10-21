import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { category1Schema, type Category1 } from "./category1.js";
import { feedRequestOptionsSchema, type FeedRequestOptions } from "./feed-request-options.js";
import { sessionInfoSchema, type SessionInfo } from "./session-info.js";

export type FeedRequest = {
  /**
   * Categories of content requested. An allowlist gives flexibility to request content separately
   * or together.
   */
  categories?: Category1[];
  requestOptions?: FeedRequestOptions;
  /**
   * Timeout in milliseconds for the request. A `408` error will be returned if handling the request
   * takes longer.
   */
  timeoutMillis?: number;
  sessionInfo?: SessionInfo;
};

export const feedRequestSchema: Schema<FeedRequest> = s.object<FeedRequest>({
  categories: s.optional(s.array(s.lazy(() => category1Schema))),
  requestOptions: s.optional(s.lazy(() => feedRequestOptionsSchema)),
  timeoutMillis: s.optional(s.int()),
  sessionInfo: s.optional(s.lazy(() => sessionInfoSchema)),
});
