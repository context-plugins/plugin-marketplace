import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { pyPiRepositoryConfig2Schema, type PyPiRepositoryConfig2 } from "./py-pi-repository-config2.js";

/** Optional. Dependency repository configuration. */
export type RepositoryConfig2 = {
  /** Optional. Configuration for PyPi repository. */
  pypiRepositoryConfig?: PyPiRepositoryConfig2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const repositoryConfig2Schema: Schema<RepositoryConfig2> = s.object<RepositoryConfig2>(
  {
    pypiRepositoryConfig: s.optional(s.lazy(() => pyPiRepositoryConfig2Schema)),
  },
  { additionalProperties: s.json() },
);
