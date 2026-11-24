import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { connectionProfileSchema, type ConnectionProfile } from "./connection-profile.js";

/** Response message for listing connection profiles. */
export type ListConnectionProfilesResponse = {
  /** Locations that could not be reached. */
  unreachable?: string[];
  /**
   * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** List of connection profiles. */
  connectionProfiles?: ConnectionProfile[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listConnectionProfilesResponseSchema: Schema<ListConnectionProfilesResponse> =
  s.object<ListConnectionProfilesResponse>(
    {
      unreachable: s.optional(s.array(s.string())),
      nextPageToken: s.optional(s.string()),
      connectionProfiles: s.optional(s.array(s.lazy(() => connectionProfileSchema))),
    },
    { additionalProperties: s.json() },
  );
