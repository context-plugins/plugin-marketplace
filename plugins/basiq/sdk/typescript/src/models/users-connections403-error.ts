import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datum2ConnectionsApiSchema, type Datum2ConnectionsApi } from "./datum2-connections-api.js";

export type UsersConnections403Error = {
  /** Unique identifier for this particular occurrence of the problem. */
  correlationId: string;
  /** Error data. */
  data: Datum2ConnectionsApi[];
  /** Always "list". */
  type: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersConnections403ErrorSchema: Schema<UsersConnections403Error> =
  s.object<UsersConnections403Error>(
    {
      correlationId: s.string(),
      data: s.array(s.lazy(() => datum2ConnectionsApiSchema)),
      type: s.string(),
    },
    { additionalProperties: s.json() },
  );
