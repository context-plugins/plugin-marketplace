import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A Document Understanding project containing classifiers and extractors */
export type Project = {
  /** Unique identifier of the project */
  id?: string;
  /** Display name of the project */
  name?: string;
  /** Optional description of the project's purpose */
  description?: string;
  /** URL to retrieve the list of extractors for this project */
  extractorsUrl?: string;
  /** URL to retrieve the list of classifiers for this project */
  classifiersUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const projectProperties: s.Shape<Project> = {
  id: s.optional(s.string()),
  name: s.optional(s.string()),
  description: s.optional(s.string()),
  extractorsUrl: s.optional(s.string()),
  classifiersUrl: s.optional(s.string()),
};

export const projectInternalSchema: Schema<Project> = s.object<Project>(projectProperties, {
  additionalProperties: s.json(),
});

export const projectSchema: Schema<Project> = s.lazySchema(() =>
  s.object<Project>(
    {
      ...projectProperties,
      extractorsUrl: s.optional(s.string().check(s.url())),
      classifiersUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
