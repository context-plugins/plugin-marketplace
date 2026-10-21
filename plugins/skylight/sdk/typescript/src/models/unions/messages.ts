import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Messages = Record<string, unknown>[];

export const messagesSchema: Schema<Messages> = s.of<Messages>(
  s.union([s.array(s.record(s.string(), s.unknown()))]),
);
