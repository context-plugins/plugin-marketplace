import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Session data required to launch a payment provider client SDK */
export type SessionData = Record<string, unknown>;

export const sessionDataSchema: Schema<SessionData> = s.of<SessionData>(
  s.union([s.record(s.string(), s.unknown())]),
);
