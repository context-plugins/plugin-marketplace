import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { nameSchema, type Name } from "./unions/name.js";

export type WorkspaceUpdateRequest = {
  name?: Name;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workspaceUpdateRequestSchema: Schema<WorkspaceUpdateRequest> = s.object<WorkspaceUpdateRequest>(
  {
    name: s.optional(s.lazy(() => nameSchema)),
  },
  { additionalProperties: s.json() },
);
