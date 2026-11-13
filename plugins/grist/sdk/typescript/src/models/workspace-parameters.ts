import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type WorkspaceParameters = {
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workspaceParametersSchema: Schema<WorkspaceParameters> = s.object<WorkspaceParameters>(
  {
    name: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
