import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ManageProjectRequest = {
  name: string;
  /** The key's own project, by id, slug, or name. */
  project?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ManageProjectRequestSchema: Schema<ApiV1ManageProjectRequest> =
  s.object<ApiV1ManageProjectRequest>(
    {
      name: s.string(),
      project: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
