import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data4Schema, type Data4 } from "./data4.js";

export type UsersConsents404Error = {
  /** Always "list". */
  type: string;
  /** Unique identifier for this particular occurrence of the problem. */
  correlationId: string;
  /** Error data. */
  data: Data4[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersConsents404ErrorSchema: Schema<UsersConsents404Error> = s.object<UsersConsents404Error>(
  {
    type: s.string(),
    correlationId: s.string(),
    data: s.array(s.lazy(() => data4Schema)),
  },
  { additionalProperties: s.json() },
);
