import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Seconds the session's browser stays open after its last run, so a follow-up run reuses the same
 * page, never past the browser's 4 h lifetime. Default 120. Follow-up runs inherit the session's
 * value; send a new value to change it or null to restore the default. Kept time is billed as
 * browser time. Ignored (always 120) for free-tier and Zero Data Retention projects.
 */
export type Keepalive = number;

export const keepaliveInternalSchema: Schema<Keepalive> = s.of<Keepalive>(s.union([s.int()]));

export const keepaliveSchema: Schema<Keepalive> = s.lazySchema(() =>
  s.of<Keepalive>(s.union([s.int().check(s.gte(120), s.lte(14400))])),
);
