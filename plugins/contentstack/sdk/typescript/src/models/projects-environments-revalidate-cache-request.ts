import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ProjectsEnvironmentsRevalidateCacheRequest = {
  /** Specific URL paths to revalidate. If empty, all paths are revalidated. */
  paths?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectsEnvironmentsRevalidateCacheRequestSchema: Schema<ProjectsEnvironmentsRevalidateCacheRequest> =
  s.object<ProjectsEnvironmentsRevalidateCacheRequest>(
    {
      paths: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
