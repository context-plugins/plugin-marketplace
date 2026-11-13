import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** An action representing a bulk operation within a workspace2. */
export type HistoryActionWorkspace2BulkUpdate = {
  /** The ID of the entity referenced. */
  id: string;
  /** The type of entity referenced. */
  entityType: string;
  /** The action of the entity referenced. @default "bulk-update" */
  action?: "bulk-update";
  /** The name of the workspace2 in which the BulkUpdate occurred. */
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const historyActionWorkspace2BulkUpdateSchema: Schema<HistoryActionWorkspace2BulkUpdate> =
  s.object<HistoryActionWorkspace2BulkUpdate>(
    {
      id: s.string(),
      entityType: s.string(),
      action: s.defaulted(s.literal("bulk-update"), "bulk-update"),
      name: s.string(),
      _keysMap: {
        entityType: "entity_type",
      },
    },
    { additionalProperties: s.json() },
  );
