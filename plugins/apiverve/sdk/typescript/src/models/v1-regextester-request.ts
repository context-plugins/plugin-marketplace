import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1RegextesterRequest = {
  /** The regular expression pattern to test. Maximum 500 characters */
  pattern: string;
  /** The text to test the pattern against. Maximum 20000 characters */
  text: string;
  /**
   * Regex flags: g (global), i (case insensitive), m (multiline), s (dotall), u (unicode), y
   * (sticky)
   */
  flags?: string;
  /** Operation type */
  testType?: string;
  /** Replacement text for 'replace' operation */
  replacement?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1RegextesterRequestSchema: Schema<V1RegextesterRequest> = s.object<V1RegextesterRequest>(
  {
    pattern: s.string(),
    text: s.string(),
    flags: s.optional(s.string()),
    testType: s.optional(s.string()),
    replacement: s.optional(s.string()),
    _keysMap: {
      testType: "test_type",
    },
  },
  { additionalProperties: s.json() },
);
