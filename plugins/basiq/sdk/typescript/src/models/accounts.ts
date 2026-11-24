import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { datum10Schema, type Datum10 } from "./datum10.js";

export type Accounts = {
  /** Type always "list". */
  type: string;
  /** Accounts details */
  data: Datum10[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const accountsSchema: Schema<Accounts> = s.object<Accounts>(
  {
    type: s.string(),
    data: s.array(s.lazy(() => datum10Schema)),
  },
  { additionalProperties: s.json() },
);
