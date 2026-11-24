import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BuildNotDeleted = {
  /** The ID of the build that could not be successfully deleted. */
  id?: string;
  /** Additional information about the build that could not be successfully deleted. */
  statusCode?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const buildNotDeletedSchema: Schema<BuildNotDeleted> = s.object<BuildNotDeleted>(
  {
    id: s.optional(s.string()),
    statusCode: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
