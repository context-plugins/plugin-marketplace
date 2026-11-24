import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UnlockResult = {
  code: number;
  message?: string;
  callsRemaining: number;
  expiresAt?: Date;
  whenSpent?: Record<string, unknown>;
  terms?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const unlockResultSchema: Schema<UnlockResult> = s.object<UnlockResult>(
  {
    code: s.int(),
    message: s.optional(s.string()),
    callsRemaining: s.int(),
    expiresAt: s.optional(s.dateTime()),
    whenSpent: s.optional(s.record(s.string(), s.unknown())),
    terms: s.optional(s.record(s.string(), s.unknown())),
    _keysMap: {
      callsRemaining: "calls_remaining",
      expiresAt: "expires_at",
      whenSpent: "when_spent",
    },
  },
  { additionalProperties: s.json() },
);
