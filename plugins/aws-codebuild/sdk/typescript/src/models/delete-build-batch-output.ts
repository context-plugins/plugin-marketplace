import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { buildNotDeletedSchema, type BuildNotDeleted } from "./build-not-deleted.js";

export type DeleteBuildBatchOutput = {
  /** The status code. */
  statusCode?: string;
  /** An array of strings that contain the identifiers of the builds that were deleted. */
  buildsDeleted?: string[];
  /** An array of BuildNotDeleted objects that specify the builds that could not be deleted. */
  buildsNotDeleted?: BuildNotDeleted[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteBuildBatchOutputSchema: Schema<DeleteBuildBatchOutput> = s.object<DeleteBuildBatchOutput>(
  {
    statusCode: s.optional(s.string()),
    buildsDeleted: s.optional(s.array(s.string())),
    buildsNotDeleted: s.optional(s.array(s.lazy(() => buildNotDeletedSchema))),
  },
  { additionalProperties: s.json() },
);
