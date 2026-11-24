import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { streamSchema, type Stream } from "./stream.js";

/** Response message for listing streams. */
export type ListStreamsResponse = {
  /** List of streams */
  streams?: Stream[];
  /**
   * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listStreamsResponseSchema: Schema<ListStreamsResponse> = s.object<ListStreamsResponse>(
  {
    streams: s.optional(s.array(s.lazy(() => streamSchema))),
    nextPageToken: s.optional(s.string()),
    unreachable: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
