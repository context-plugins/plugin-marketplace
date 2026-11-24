import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { projectEnvVarSchema, type ProjectEnvVar } from "./project-env-var.js";

export type ProjectEnvVarList = {
  /** List of environment variables */
  items?: ProjectEnvVar[];
  /** Token for retrieving the next page */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectEnvVarListSchema: Schema<ProjectEnvVarList> = s.object<ProjectEnvVarList>(
  {
    items: s.optional(s.array(s.lazy(() => projectEnvVarSchema))),
    nextPageToken: s.optional(s.string()),
    _keysMap: {
      nextPageToken: "next_page_token",
    },
  },
  { additionalProperties: s.json() },
);
