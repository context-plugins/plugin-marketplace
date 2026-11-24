import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UnassignedGeographicAccessScope = {
  /** No geographic scope is assigned. @default "unassigned" */
  type?: "unassigned";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const unassignedGeographicAccessScopeSchema: Schema<UnassignedGeographicAccessScope> =
  s.object<UnassignedGeographicAccessScope>(
    {
      type: s.defaulted(s.literal("unassigned"), "unassigned"),
    },
    { additionalProperties: s.json() },
  );
