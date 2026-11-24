import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteProjectInput = {
  /** The name of the build project. */
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteProjectInputSchema: Schema<DeleteProjectInput> = s.object<DeleteProjectInput>(
  {
    name: s.string(),
  },
  { additionalProperties: s.json() },
);
