import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** An action representing a Task being deleted. */
export type HistoryActionTaskDelete = {
  /** The ID of the entity referenced. */
  id: number;
  /** The type of entity referenced. */
  entityType: string;
  /** The action of the entity referenced. @default "delete" */
  action?: "delete";
  /** The description of the Task being deleted. */
  description: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const historyActionTaskDeleteSchema: Schema<HistoryActionTaskDelete> =
  s.object<HistoryActionTaskDelete>(
    {
      id: s.int(),
      entityType: s.string(),
      action: s.defaulted(s.literal("delete"), "delete"),
      description: s.string(),
      _keysMap: {
        entityType: "entity_type",
      },
    },
    { additionalProperties: s.json() },
  );
