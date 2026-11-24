import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { buildNotDeletedSchema, type BuildNotDeleted } from "./build-not-deleted.js";

export type BatchDeleteBuildsOutput = {
  /** The IDs of the builds that were successfully deleted. */
  buildsDeleted?: string[];
  /** Information about any builds that could not be successfully deleted. */
  buildsNotDeleted?: BuildNotDeleted[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchDeleteBuildsOutputSchema: Schema<BatchDeleteBuildsOutput> =
  s.object<BatchDeleteBuildsOutput>(
    {
      buildsDeleted: s.optional(s.array(s.string())),
      buildsNotDeleted: s.optional(s.array(s.lazy(() => buildNotDeletedSchema))),
    },
    { additionalProperties: s.json() },
  );
