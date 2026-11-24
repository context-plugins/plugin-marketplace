import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { connectionSchema, type Connection } from "./connection.js";

export type Connections = {
  /** The connections. */
  connections?: Connection[];
  /**
   * The token to use to retrieve the next page of results. This value is null when there are no
   * more results to return.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const connectionsSchema: Schema<Connections> = s.object<Connections>(
  {
    connections: s.optional(s.array(s.lazy(() => connectionSchema))),
    nextToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
