import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** An action representing a Label being deleted. */
export type HistoryActionLabelDelete = {
  /** The ID of the entity referenced. */
  id: number;
  /** The type of entity referenced. */
  entityType: string;
  /** The action of the entity referenced. @default "delete" */
  action?: "delete";
  /** The name of the Label. */
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const historyActionLabelDeleteSchema: Schema<HistoryActionLabelDelete> =
  s.object<HistoryActionLabelDelete>(
    {
      id: s.int(),
      entityType: s.string(),
      action: s.defaulted(s.literal("delete"), "delete"),
      name: s.string(),
      _keysMap: {
        entityType: "entity_type",
      },
    },
    { additionalProperties: s.json() },
  );
