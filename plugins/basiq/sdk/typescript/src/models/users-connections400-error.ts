import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datum1ConnectionsApiSchema, type Datum1ConnectionsApi } from "./datum1-connections-api.js";

export type UsersConnections400Error = {
  /** Always "list". */
  type: string;
  /** Unique identifier for this particular occurrence of the problem. */
  correlationId: string;
  /** Error data. */
  data: Datum1ConnectionsApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersConnections400ErrorSchema: Schema<UsersConnections400Error> =
  s.object<UsersConnections400Error>(
    {
      type: s.string(),
      correlationId: s.string(),
      data: s.array(s.lazy(() => datum1ConnectionsApiSchema)),
    },
    { additionalProperties: s.json() },
  );
