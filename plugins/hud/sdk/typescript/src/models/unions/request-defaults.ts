import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type RequestDefaults = Record<string, unknown>;

export const requestDefaultsSchema: Schema<RequestDefaults> = s.of<RequestDefaults>(
  s.union([s.record(s.string(), s.unknown())]),
);
