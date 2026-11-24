import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** An action representing a Label being updated. */
export type HistoryActionLabelUpdate = {
  /** The ID of the entity referenced. */
  id: number;
  /** The type of entity referenced. */
  entityType: string;
  /** The action of the entity referenced. @default "update" */
  action?: "update";
};

export const historyActionLabelUpdateSchema: Schema<HistoryActionLabelUpdate> =
  s.object<HistoryActionLabelUpdate>({
    id: s.int(),
    entityType: s.string(),
    action: s.defaulted(s.literal("update"), "update"),
    _keysMap: {
      entityType: "entity_type",
    },
  });
