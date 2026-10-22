import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Config = Record<string, Record<string, unknown>>;

export const configSchema: Schema<Config> = s.of<Config>(
  s.union([s.record(s.string(), s.record(s.string(), s.unknown()))]),
);
