import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { limitSchema, type Limit } from "./unions/limit.js";
import { remainingSchema, type Remaining } from "./unions/remaining.js";

/**
 * `remaining` and `limit` read `unlimited` on an unlimited account; null while the balance is
 * unknown.
 */
export type Tokens = {
  used: number | null;
  remaining: Remaining | null;
  limit: Limit | null;
  /** When the pool resets; on a trial, the trial's end when that comes first. */
  resetsAt: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const tokensSchema: Schema<Tokens> = s.object<Tokens>(
  {
    used: s.nullable(s.int()),
    remaining: s.nullable(s.lazy(() => remainingSchema)),
    limit: s.nullable(s.lazy(() => limitSchema)),
    resetsAt: s.nullable(s.string()),
    _keysMap: {
      resetsAt: "resets_at",
    },
  },
  { additionalProperties: s.json() },
);
