import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Configuration for PyPi repository */
export type PyPiRepositoryConfig = {
  /**
   * Optional. The PyPi repository address. Note: This field is not available for batch workloads.
   */
  pypiRepository?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pyPiRepositoryConfigSchema: Schema<PyPiRepositoryConfig> = s.object<PyPiRepositoryConfig>(
  {
    pypiRepository: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
