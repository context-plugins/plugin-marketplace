import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Parameters for creating or updating a Launch project. */
export type CreateProjectRequest2 = {
  /** Display name for the project. */
  name: string;
  /** Description of the project. */
  description?: string;
  /** The web framework for the project. */
  framework?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createProjectRequest2Schema: Schema<CreateProjectRequest2> = s.object<CreateProjectRequest2>(
  {
    name: s.string(),
    description: s.optional(s.string()),
    framework: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
