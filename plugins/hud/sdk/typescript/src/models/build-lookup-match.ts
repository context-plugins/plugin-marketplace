import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { buildLookupEnvironmentSchema, type BuildLookupEnvironment } from "./build-lookup-environment.js";
import { versionSchema, type Version } from "./unions/version.js";

export type BuildLookupMatch = {
  buildId: string;
  version?: Version;
  contentDigest: string;
  environment: BuildLookupEnvironment;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const buildLookupMatchSchema: Schema<BuildLookupMatch> = s.object<BuildLookupMatch>(
  {
    buildId: s.string(),
    version: s.optional(s.lazy(() => versionSchema)),
    contentDigest: s.string(),
    environment: buildLookupEnvironmentSchema,
    _keysMap: {
      buildId: "build_id",
      contentDigest: "content_digest",
    },
  },
  { additionalProperties: s.json() },
);
