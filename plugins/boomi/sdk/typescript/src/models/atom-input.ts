import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Input for updating an Atom. */
export type AtomInput = {
  /** Updated display name for the Atom. */
  name?: string;
  /** Number of days to retain execution history before purging. */
  purgeHistoryDays?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const atomInputSchema: Schema<AtomInput> = s.object<AtomInput>(
  {
    name: s.optional(s.string()),
    purgeHistoryDays: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
