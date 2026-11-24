import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ListProjectsOutput = {
  /**
   * If there are more than 100 items in the list, only the first 100 items are returned, along with
   * a unique string called a nextToken. To get the next batch of items in the list, call this
   * operation again, adding the next token to the call.
   */
  nextToken?: string;
  /**
   * The list of build project names, with each build project name representing a single build
   * project.
   */
  projects?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listProjectsOutputSchema: Schema<ListProjectsOutput> = s.object<ListProjectsOutput>(
  {
    nextToken: s.optional(s.string()),
    projects: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
