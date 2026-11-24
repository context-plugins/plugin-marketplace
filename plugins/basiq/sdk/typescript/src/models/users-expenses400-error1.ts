import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datumSchema, type Datum } from "./datum.js";

export type UsersExpenses400Error1 = {
  /** Always "list". */
  type: string;
  /** Unique identifier for this particular occurrence of the problem. */
  correlationId: string;
  /** Error data. */
  data: Datum[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersExpenses400Error1Schema: Schema<UsersExpenses400Error1> = s.object<UsersExpenses400Error1>(
  {
    type: s.string(),
    correlationId: s.string(),
    data: s.array(s.lazy(() => datumSchema)),
  },
  { additionalProperties: s.json() },
);
