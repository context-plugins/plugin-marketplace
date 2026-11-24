import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datum2ConnectUsersApiSchema, type Datum2ConnectUsersApi } from "./datum2-connect-users-api.js";

export type Users403Error1 = {
  /** Always "list". */
  type: string;
  /** Unique identifier for this particular occurrence of the problem. */
  correlationId: string;
  /** Error data. */
  data: Datum2ConnectUsersApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const users403Error1Schema: Schema<Users403Error1> = s.object<Users403Error1>(
  {
    type: s.string(),
    correlationId: s.string(),
    data: s.array(s.lazy(() => datum2ConnectUsersApiSchema)),
  },
  { additionalProperties: s.json() },
);
