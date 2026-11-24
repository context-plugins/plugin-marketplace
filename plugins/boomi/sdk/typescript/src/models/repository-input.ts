import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Input for creating a DataHub repository. */
export type RepositoryInput = {
  /** Display name for the repository. */
  name: string;
  /** Optional description of the repository. */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const repositoryInputSchema: Schema<RepositoryInput> = s.object<RepositoryInput>(
  {
    name: s.string(),
    description: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
