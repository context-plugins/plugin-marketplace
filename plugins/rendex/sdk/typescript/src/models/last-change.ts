import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * The "what changed" enrichment from this watch's most recent CHANGED run — returned on GET
 * /v1/watches and GET /v1/watches/{id} so a polling "changed" trigger gets the detail inline (no
 * follow-up call to /:id/runs). Null when the watch has never changed.
 */
export type LastChange = {
  /**
   * One-sentence "what changed" summary (templated by default; AI-written when a Pro+ watch opted
   * in)
   */
  aiSummary?: string | null;
  /** Parsed text diff: { added, removed, summary }. Null for a visual-only change */
  textDiff?: Record<string, unknown> | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const lastChangeSchema: Schema<LastChange> = s.object<LastChange>(
  {
    aiSummary: s.optionalNullable(s.string()),
    textDiff: s.optionalNullable(s.record(s.string(), s.unknown())),
  },
  { additionalProperties: s.json() },
);
