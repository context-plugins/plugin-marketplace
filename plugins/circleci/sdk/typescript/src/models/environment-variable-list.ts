import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { environmentVariableSchema, type EnvironmentVariable } from "./environment-variable.js";

export type EnvironmentVariableList = {
  /** List of environment variables */
  items?: EnvironmentVariable[];
  /** Token for retrieving the next page */
  nextPageToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const environmentVariableListSchema: Schema<EnvironmentVariableList> =
  s.object<EnvironmentVariableList>(
    {
      items: s.optional(s.array(s.lazy(() => environmentVariableSchema))),
      nextPageToken: s.optional(s.string()),
      _keysMap: {
        nextPageToken: "next_page_token",
      },
    },
    { additionalProperties: s.json() },
  );
