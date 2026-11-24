import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Optional. Config to enable subscribing to all events from a list of projects. All the projects
 * must be in the same org as the GoogleApiSource.
 */
export type ProjectSubscriptions2 = {
  /**
   * Required. A list of projects to receive events from. All the projects must be in the same org.
   * The listed projects should have the format project/{identifier} where identifier can be either
   * the project id for project number. A single list may contain both formats. At most 100 projects
   * can be listed.
   */
  list?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectSubscriptions2Schema: Schema<ProjectSubscriptions2> = s.object<ProjectSubscriptions2>(
  {
    list: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
