import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { buildSchema, type Build } from "./build.js";

export type BatchGetBuildsOutputAwsCodeBuildBuildsApi = {
  /** Information about the requested builds. */
  builds?: Build[];
  /** The IDs of builds for which information could not be found. */
  buildsNotFound?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchGetBuildsOutputAwsCodeBuildBuildsApiSchema: Schema<BatchGetBuildsOutputAwsCodeBuildBuildsApi> =
  s.object<BatchGetBuildsOutputAwsCodeBuildBuildsApi>(
    {
      builds: s.optional(s.array(s.lazy(() => buildSchema))),
      buildsNotFound: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
