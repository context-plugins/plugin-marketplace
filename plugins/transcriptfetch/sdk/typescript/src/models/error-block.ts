import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { code1Schema, type Code1 } from "./code1.js";
import { numberSchema, type Number } from "./number.js";

/**
 * Every failure carries this block. Branch on code (a stable string) or number (a stable integer
 * whose thousands digit is the family: 1 request, 2 account, 3 input, 4 content, 5 transient, 9
 * ours; 5xxx means retry with backoff). At most one of retry_with, details, issues is present.
 * Failures are never charged.
 */
export type ErrorBlock = {
  code: Code1;
  number: Number;
  /** Prose for humans. Never parse it. */
  message: string;
  /** https://transcriptfetch.com/docs/errors/<code> */
  docs: string;
  /**
   * Present when a different request would succeed: the fields to change, e.g. { "mode": "audio" }
   * to transcribe a captionless video, or { "endpoint": "/api/v2/transcripts/video" } for a
   * platform this endpoint does not list.
   */
  retryWith?: Record<string, unknown>;
  /**
   * Structured specifics for the few codes that document one: batch_too_large { max, sent },
   * podcast_feed_not_found { reason, candidates? }.
   */
  details?: Record<string, unknown>;
  /** Field-level validation problems (invalid_request only). */
  issues?: Record<string, unknown>[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const errorBlockProperties: s.Shape<ErrorBlock> = {
  code: code1Schema,
  number: numberSchema,
  message: s.string(),
  docs: s.string(),
  retryWith: s.optional(s.record(s.string(), s.unknown())),
  details: s.optional(s.record(s.string(), s.unknown())),
  issues: s.optional(s.array(s.record(s.string(), s.unknown()))),
  _keysMap: {
    retryWith: "retry_with",
  },
};

export const errorBlockInternalSchema: Schema<ErrorBlock> = s.object<ErrorBlock>(errorBlockProperties, {
  additionalProperties: s.json(),
});

export const errorBlockSchema: Schema<ErrorBlock> = s.lazySchema(() =>
  s.object<ErrorBlock>(
    {
      ...errorBlockProperties,
      docs: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
