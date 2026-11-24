import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * A non-fatal notice that part of the request was accepted but a specific item was silently
 * skipped. Additive and non-breaking; clients may branch on `code`.
 */
export type Warning = {
  /** Entity kind the warning is about (e.g. "caller_id", "did"). */
  resource: string;
  /** The value the client sent that was skipped. */
  identifier: string;
  /** Stable machine-readable token for the reason. */
  code: string;
  /** Human-readable explanation. */
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const warningSchema: Schema<Warning> = s.object<Warning>(
  {
    resource: s.string(),
    identifier: s.string(),
    code: s.string(),
    message: s.string(),
  },
  { additionalProperties: s.json() },
);
