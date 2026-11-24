import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sessionSchema, type Session } from "./session.js";

/** A list of interactive sessions. */
export type ListSessionsResponse = {
  /**
   * A token, which can be sent as page_token, to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** Output only. The sessions from the specified collection. */
  sessions?: Session[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listSessionsResponseSchema: Schema<ListSessionsResponse> = s.object<ListSessionsResponse>(
  {
    nextPageToken: s.optional(s.string()),
    sessions: s.optional(s.array(s.lazy(() => sessionSchema))),
  },
  { additionalProperties: s.json() },
);
