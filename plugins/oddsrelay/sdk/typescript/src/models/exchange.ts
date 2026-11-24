import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sportsSchema, type Sports } from "./sports.js";

export type Exchange = {
  key: string;
  name: string;
  sports: Record<string, Sports>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const exchangeSchema: Schema<Exchange> = s.object<Exchange>(
  {
    key: s.string(),
    name: s.string(),
    sports: s.record(
      s.string(),
      s.lazy(() => sportsSchema),
    ),
  },
  { additionalProperties: s.json() },
);
