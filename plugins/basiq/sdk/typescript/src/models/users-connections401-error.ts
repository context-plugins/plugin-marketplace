import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datum12Schema, type Datum12 } from "./datum12.js";

export type UsersConnections401Error = {
  /** Unique identifier for this particular occurrence of the problem. */
  correlationId: string;
  /** Error data. */
  data: Datum12[];
  /** Always "list". */
  type: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersConnections401ErrorSchema: Schema<UsersConnections401Error> =
  s.object<UsersConnections401Error>(
    {
      correlationId: s.string(),
      data: s.array(s.lazy(() => datum12Schema)),
      type: s.string(),
    },
    { additionalProperties: s.json() },
  );
