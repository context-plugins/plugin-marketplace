import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The project this job belongs to */
export type Project = {
  /** The project slug */
  slug?: string;
  /** The project name */
  name?: string;
  /** External URL to the project */
  externalUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const projectProperties: s.Shape<Project> = {
  slug: s.optional(s.string()),
  name: s.optional(s.string()),
  externalUrl: s.optional(s.string()),
  _keysMap: {
    externalUrl: "external_url",
  },
};

export const projectInternalSchema: Schema<Project> = s.object<Project>(projectProperties, {
  additionalProperties: s.json(),
});

export const projectSchema: Schema<Project> = s.lazySchema(() =>
  s.object<Project>(
    {
      ...projectProperties,
      externalUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
