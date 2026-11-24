import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PipelineConfig = {
  /** The source configuration */
  source?: string;
  /** The compiled configuration */
  compiled?: string;
  /** The setup configuration */
  setupConfig?: string;
  /** The compiled setup configuration */
  compiledSetupConfig?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pipelineConfigSchema: Schema<PipelineConfig> = s.object<PipelineConfig>(
  {
    source: s.optional(s.string()),
    compiled: s.optional(s.string()),
    setupConfig: s.optional(s.string()),
    compiledSetupConfig: s.optional(s.string()),
    _keysMap: {
      setupConfig: "setup-config",
      compiledSetupConfig: "compiled-setup-config",
    },
  },
  { additionalProperties: s.json() },
);
