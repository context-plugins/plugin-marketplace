import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Information about the human input being requested, if agent is waiting */
export type HumanInputRequest = Record<string, unknown>;

export const humanInputRequestSchema: Schema<HumanInputRequest> = s.of<HumanInputRequest>(
  s.union([s.record(s.string(), s.unknown())]),
);
