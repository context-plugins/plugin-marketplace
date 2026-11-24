import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Input for creating or updating an integration process. */
export type ProcessInput = {
  /** Display name for the process. */
  name?: string;
  /** ID of the folder to place the process in. */
  folderId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const processInputSchema: Schema<ProcessInput> = s.object<ProcessInput>(
  {
    name: s.optional(s.string()),
    folderId: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
