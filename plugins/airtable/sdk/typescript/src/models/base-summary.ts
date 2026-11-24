import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { permissionLevelSchema, type PermissionLevel } from "./permission-level.js";

/** Summary information about an Airtable base. */
export type BaseSummary = {
  /** The unique identifier of the base (starts with 'app'). */
  id: string;
  /** The name of the base. */
  name: string;
  /** The permission level the authenticated user has on this base. */
  permissionLevel: PermissionLevel;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const baseSummarySchema: Schema<BaseSummary> = s.object<BaseSummary>(
  {
    id: s.string(),
    name: s.string(),
    permissionLevel: permissionLevelSchema,
  },
  { additionalProperties: s.json() },
);
