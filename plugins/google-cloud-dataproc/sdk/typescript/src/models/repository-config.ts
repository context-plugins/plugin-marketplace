import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { pyPiRepositoryConfig2Schema, type PyPiRepositoryConfig2 } from "./py-pi-repository-config2.js";

/** Configuration for dependency repositories */
export type RepositoryConfig = {
  /** Optional. Configuration for PyPi repository. */
  pypiRepositoryConfig?: PyPiRepositoryConfig2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const repositoryConfigSchema: Schema<RepositoryConfig> = s.object<RepositoryConfig>(
  {
    pypiRepositoryConfig: s.optional(s.lazy(() => pyPiRepositoryConfig2Schema)),
  },
  { additionalProperties: s.json() },
);
