import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Provider-specific configuration. Currently only used by Paze. */
export type ExtraConfiguration = Record<string, unknown>;

export const extraConfigurationSchema: Schema<ExtraConfiguration> = s.of<ExtraConfiguration>(
  s.union([s.record(s.string(), s.unknown())]),
);
