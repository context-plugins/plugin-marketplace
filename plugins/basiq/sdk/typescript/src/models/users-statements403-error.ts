import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datum1Schema, type Datum1 } from "./datum1.js";

export type UsersStatements403Error = {
  /** Unique identifier for this particular occurrence of the problem. */
  correlationId: string;
  /** Error data. */
  data: Datum1[];
  /** Always "list". */
  type: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usersStatements403ErrorSchema: Schema<UsersStatements403Error> =
  s.object<UsersStatements403Error>(
    {
      correlationId: s.string(),
      data: s.array(s.lazy(() => datum1Schema)),
      type: s.string(),
    },
    { additionalProperties: s.json() },
  );
