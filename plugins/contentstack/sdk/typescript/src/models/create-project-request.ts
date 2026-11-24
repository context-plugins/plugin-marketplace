import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Parameters for creating or updating a project. */
export type CreateProjectRequest = {
  /** Display name for the project. */
  name: string;
  /** Description of the project's purpose. */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createProjectRequestSchema: Schema<CreateProjectRequest> = s.object<CreateProjectRequest>(
  {
    name: s.string(),
    description: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
