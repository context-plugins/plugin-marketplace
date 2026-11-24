import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { googleApiSourceSchema, type GoogleApiSource } from "./google-api-source.js";

/** The response message for the `ListGoogleApiSources` method. */
export type ListGoogleApiSourcesResponse = {
  /** The requested GoogleApiSources, up to the number specified in `page_size`. */
  googleApiSources?: GoogleApiSource[];
  /** Unreachable resources, if any. */
  unreachable?: string[];
  /**
   * A page token that can be sent to `ListMessageBusEnrollments` to request the next page. If this
   * is empty, then there are no more pages.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listGoogleApiSourcesResponseSchema: Schema<ListGoogleApiSourcesResponse> =
  s.object<ListGoogleApiSourcesResponse>(
    {
      googleApiSources: s.optional(s.array(s.lazy(() => googleApiSourceSchema))),
      unreachable: s.optional(s.array(s.string())),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
