import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Current concurrency usage. Null if unable to retrieve concurrency information. */
export type Concurrency = {
  /** Number of concurrent slots currently in use. */
  used?: number;
  /** Maximum allowed concurrent tasks for this organization, set by your plan. */
  max?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const concurrencySchema: Schema<Concurrency> = s.object<Concurrency>(
  {
    used: s.optional(s.int()),
    max: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
