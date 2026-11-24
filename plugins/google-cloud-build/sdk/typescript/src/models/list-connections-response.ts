import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { connectionSchema, type Connection } from "./connection.js";

/** Message for response to listing Connections. */
export type ListConnectionsResponse = {
  /** Locations that could not be reached. */
  unreachable?: string[];
  /** The list of Connections. */
  connections?: Connection[];
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listConnectionsResponseSchema: Schema<ListConnectionsResponse> =
  s.object<ListConnectionsResponse>(
    {
      unreachable: s.optional(s.array(s.string())),
      connections: s.optional(s.array(s.lazy(() => connectionSchema))),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
