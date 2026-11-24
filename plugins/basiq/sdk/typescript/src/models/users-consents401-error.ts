import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data2Schema, type Data2 } from "./data2.js";

export type UsersConsents401Error = {
  /** Unique identifier for this particular occurrence of the problem. */
  correlationId: string;
  /** Error data. */
  data: Data2[];
  /** Always "list". */
  type: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersConsents401ErrorSchema: Schema<UsersConsents401Error> = s.object<UsersConsents401Error>(
  {
    correlationId: s.string(),
    data: s.array(s.lazy(() => data2Schema)),
    type: s.string(),
  },
  { additionalProperties: s.json() },
);
