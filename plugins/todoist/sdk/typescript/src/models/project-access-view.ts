import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { projectVisibilitySchema, type ProjectVisibility } from "./project-visibility.js";
import { configurationSchema, type Configuration } from "./unions/configuration.js";

/** Contains the details on who can view a project. */
export type ProjectAccessView = {
  /** Project visibility level. */
  visibility: ProjectVisibility;
  /** Configuration for the selected visibility level. */
  configuration: Configuration;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectAccessViewSchema: Schema<ProjectAccessView> = s.object<ProjectAccessView>(
  {
    visibility: projectVisibilitySchema,
    configuration: configurationSchema,
  },
  { additionalProperties: s.json() },
);
