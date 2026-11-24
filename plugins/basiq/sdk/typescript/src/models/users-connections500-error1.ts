import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datum2Schema, type Datum2 } from "./datum2.js";

export type UsersConnections500Error1 = {
  /** Unique identifier for this particular occurrence of the problem. */
  correlationId: string;
  /** Error data. */
  data: Datum2[];
  /** Always "list". */
  type: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersConnections500Error1Schema: Schema<UsersConnections500Error1> =
  s.object<UsersConnections500Error1>(
    {
      correlationId: s.string(),
      data: s.array(s.lazy(() => datum2Schema)),
      type: s.string(),
    },
    { additionalProperties: s.json() },
  );
