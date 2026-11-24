import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { repositorySchema, type Repository } from "./repository.js";

/** Response message for FetchLinkableRepositories. */
export type FetchLinkableRepositoriesResponse = {
  /** repositories ready to be created. */
  repositories?: Repository[];
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fetchLinkableRepositoriesResponseSchema: Schema<FetchLinkableRepositoriesResponse> =
  s.object<FetchLinkableRepositoriesResponse>(
    {
      repositories: s.optional(s.array(s.lazy(() => repositorySchema))),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
