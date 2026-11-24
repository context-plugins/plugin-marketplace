import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { federationSchema, type Federation } from "./federation.js";

/** Response message for ListFederations */
export type ListFederationsResponse = {
  /** The services in the specified location. */
  federations?: Federation[];
  /** Locations that could not be reached. */
  unreachable?: string[];
  /**
   * A token that can be sent as page_token to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listFederationsResponseSchema: Schema<ListFederationsResponse> =
  s.object<ListFederationsResponse>(
    {
      federations: s.optional(s.array(s.lazy(() => federationSchema))),
      unreachable: s.optional(s.array(s.string())),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
