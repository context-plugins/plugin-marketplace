import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datum11Schema, type Datum11 } from "./datum11.js";

export type UsersAuthLink503Error1 = {
  /** Always "list". */
  type: string;
  /** Unique identifier for this particular occurrence of the problem. */
  correlationId: string;
  /** Error data. */
  data: Datum11[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersAuthLink503Error1Schema: Schema<UsersAuthLink503Error1> = s.object<UsersAuthLink503Error1>(
  {
    type: s.string(),
    correlationId: s.string(),
    data: s.array(s.lazy(() => datum11Schema)),
  },
  { additionalProperties: s.json() },
);
