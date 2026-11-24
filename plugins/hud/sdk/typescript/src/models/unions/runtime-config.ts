import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type RuntimeConfig = Record<string, unknown>;

export const runtimeConfigSchema: Schema<RuntimeConfig> = s.of<RuntimeConfig>(
  s.union([s.record(s.string(), s.unknown())]),
);
