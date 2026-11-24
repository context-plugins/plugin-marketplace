import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Optional. Configuration for PyPi repository. */
export type PyPiRepositoryConfig2 = {
  /**
   * Optional. The PyPi repository address. Note: This field is not available for batch workloads.
   */
  pypiRepository?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const pyPiRepositoryConfig2Schema: Schema<PyPiRepositoryConfig2> = s.object<PyPiRepositoryConfig2>(
  {
    pypiRepository: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
