import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { privateConnectionSchema, type PrivateConnection } from "./private-connection.js";

/** Response containing a list of private connection configurations. */
export type ListPrivateConnectionsResponse = {
  /**
   * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** Locations that could not be reached. */
  unreachable?: string[];
  /** List of private connectivity configurations. */
  privateConnections?: PrivateConnection[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listPrivateConnectionsResponseSchema: Schema<ListPrivateConnectionsResponse> =
  s.object<ListPrivateConnectionsResponse>(
    {
      nextPageToken: s.optional(s.string()),
      unreachable: s.optional(s.array(s.string())),
      privateConnections: s.optional(s.array(s.lazy(() => privateConnectionSchema))),
    },
    { additionalProperties: s.json() },
  );
