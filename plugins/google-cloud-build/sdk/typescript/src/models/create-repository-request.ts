import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { repository1Schema, type Repository1 } from "./repository1.js";

/** Message for creating a Repository. */
export type CreateRepositoryRequest = {
  /**
   * Required. The ID to use for the repository, which will become the final component of the
   * repository's resource name. This ID should be unique in the connection. Allows alphanumeric
   * characters and any of -._~%!$&'()*+,;=@.
   */
  repositoryId?: string;
  /**
   * Required. The connection to contain the repository. If the request is part of a
   * BatchCreateRepositoriesRequest, this field should be empty or match the parent specified there.
   */
  parent?: string;
  /** Required. The repository to create. */
  repository?: Repository1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createRepositoryRequestSchema: Schema<CreateRepositoryRequest> =
  s.object<CreateRepositoryRequest>(
    {
      repositoryId: s.optional(s.string()),
      parent: s.optional(s.string()),
      repository: s.optional(s.lazy(() => repository1Schema)),
    },
    { additionalProperties: s.json() },
  );
