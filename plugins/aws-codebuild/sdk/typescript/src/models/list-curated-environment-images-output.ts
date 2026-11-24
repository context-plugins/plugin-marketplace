import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { environmentPlatformSchema, type EnvironmentPlatform } from "./environment-platform.js";

export type ListCuratedEnvironmentImagesOutput = {
  /** Information about supported platforms for Docker images that are managed by CodeBuild. */
  platforms?: EnvironmentPlatform[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listCuratedEnvironmentImagesOutputSchema: Schema<ListCuratedEnvironmentImagesOutput> =
  s.object<ListCuratedEnvironmentImagesOutput>(
    {
      platforms: s.optional(s.array(s.lazy(() => environmentPlatformSchema))),
    },
    { additionalProperties: s.json() },
  );
