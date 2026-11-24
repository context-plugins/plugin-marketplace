import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { repositorySchema, type Repository } from "./repository.js";

/** Message for response to listing Repositories. */
export type ListRepositoriesResponse = {
  /** Locations that could not be reached. */
  unreachable?: string[];
  /** The list of Repositories. */
  repositories?: Repository[];
  /** A token identifying a page of results the server should return. */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listRepositoriesResponseSchema: Schema<ListRepositoriesResponse> =
  s.object<ListRepositoriesResponse>(
    {
      unreachable: s.optional(s.array(s.string())),
      repositories: s.optional(s.array(s.lazy(() => repositorySchema))),
      nextPageToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
