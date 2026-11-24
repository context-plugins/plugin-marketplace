import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { streamObjectSchema, type StreamObject } from "./stream-object.js";

/** Response containing the objects for a stream. */
export type ListStreamObjectsResponse = {
  /** List of stream objects. */
  streamObjects?: StreamObject[];
  /** A token, which can be sent as `page_token` to retrieve the next page. */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listStreamObjectsResponseSchema: Schema<ListStreamObjectsResponse> =
  s.object<ListStreamObjectsResponse>(
    {
      streamObjects: s.optional(s.array(s.lazy(() => streamObjectSchema))),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
