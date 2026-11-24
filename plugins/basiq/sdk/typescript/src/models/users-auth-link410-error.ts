import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datum2Schema, type Datum2 } from "./datum2.js";

export type UsersAuthLink410Error = {
  /** Unique identifier for this particular occurrence of the problem. */
  correlationId: string;
  /** Error data. */
  data: Datum2[];
  /** Always "list". */
  type: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersAuthLink410ErrorSchema: Schema<UsersAuthLink410Error> = s.object<UsersAuthLink410Error>(
  {
    correlationId: s.string(),
    data: s.array(s.lazy(() => datum2Schema)),
    type: s.string(),
  },
  { additionalProperties: s.json() },
);
