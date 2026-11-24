import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datum1ConnectionsApiSchema, type Datum1ConnectionsApi } from "./datum1-connections-api.js";

export type UsersTransactions400Error1 = {
  /** Always "list". */
  type: string;
  /** Unique identifier for this particular occurrence of the problem. */
  correlationId: string;
  /** Error data. */
  data: Datum1ConnectionsApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersTransactions400Error1Schema: Schema<UsersTransactions400Error1> =
  s.object<UsersTransactions400Error1>(
    {
      type: s.string(),
      correlationId: s.string(),
      data: s.array(s.lazy(() => datum1ConnectionsApiSchema)),
    },
    { additionalProperties: s.json() },
  );
