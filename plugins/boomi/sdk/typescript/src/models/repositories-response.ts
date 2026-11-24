import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { repositorySchema, type Repository } from "./repository.js";

export type RepositoriesResponse = {
  repositories?: Repository[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const repositoriesResponseSchema: Schema<RepositoriesResponse> = s.object<RepositoriesResponse>(
  {
    repositories: s.optional(s.array(s.lazy(() => repositorySchema))),
  },
  { additionalProperties: s.json() },
);
