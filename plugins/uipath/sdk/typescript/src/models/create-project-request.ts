import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Request payload for creating a new test project */
export type CreateProjectRequest = {
  /** Display name for the new test project */
  name: string;
  /** Optional description of the project's testing scope */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createProjectRequestProperties: s.Shape<CreateProjectRequest> = {
  name: s.string(),
  description: s.optional(s.string()),
};

export const createProjectRequestInternalSchema: Schema<CreateProjectRequest> =
  s.object<CreateProjectRequest>(createProjectRequestProperties, { additionalProperties: s.json() });

export const createProjectRequestSchema: Schema<CreateProjectRequest> = s.lazySchema(() =>
  s.object<CreateProjectRequest>(
    {
      ...createProjectRequestProperties,
      name: s.string().check(s.maxLength(256)),
    },
    { additionalProperties: s.json() },
  ),
);
