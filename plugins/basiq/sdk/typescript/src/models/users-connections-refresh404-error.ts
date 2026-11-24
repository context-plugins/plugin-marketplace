import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datum2Schema, type Datum2 } from "./datum2.js";

export type UsersConnectionsRefresh404Error = {
  /** Unique identifier for this particular occurrence of the problem. */
  correlationId: string;
  /** Error data. */
  data: Datum2[];
  /** Always "list". */
  type: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersConnectionsRefresh404ErrorSchema: Schema<UsersConnectionsRefresh404Error> =
  s.object<UsersConnectionsRefresh404Error>(
    {
      correlationId: s.string(),
      data: s.array(s.lazy(() => datum2Schema)),
      type: s.string(),
    },
    { additionalProperties: s.json() },
  );
