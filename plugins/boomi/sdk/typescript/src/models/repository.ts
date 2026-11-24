import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A DataHub repository that organizes master data domains and models. */
export type Repository = {
  /** Unique identifier of the repository. */
  id?: string;
  /** Display name of the repository. */
  name?: string;
  /** Human-readable description of the repository's purpose. */
  description?: string;
  /** Timestamp when the repository was created. */
  createdDate?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const repositorySchema: Schema<Repository> = s.object<Repository>(
  {
    id: s.optional(s.string()),
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    createdDate: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
