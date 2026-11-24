import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ValueUiPathOrchestratorRolesApi = {
  /** Unique role identifier */
  id?: number;
  /** Display name of the role */
  name?: string;
  /** Human-readable display name for the role */
  displayName?: string;
  /** Whether this is a built-in system role that cannot be deleted */
  isStatic?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const valueUiPathOrchestratorRolesApiSchema: Schema<ValueUiPathOrchestratorRolesApi> =
  s.object<ValueUiPathOrchestratorRolesApi>(
    {
      id: s.optional(s.int()),
      name: s.optional(s.string()),
      displayName: s.optional(s.string()),
      isStatic: s.optional(s.boolean()),
      _keysMap: {
        id: "Id",
        name: "Name",
        displayName: "DisplayName",
        isStatic: "IsStatic",
      },
    },
    { additionalProperties: s.json() },
  );
