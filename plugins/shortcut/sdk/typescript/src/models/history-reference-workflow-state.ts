import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type2Schema, type Type2 } from "./type2.js";
import { idSchema, type Id } from "./unions/id.js";

/** A references to a Story Workflow State. */
export type HistoryReferenceWorkflowState = {
  /** The ID of the entity referenced. */
  id: Id;
  /** The type of entity referenced. */
  entityType: string;
  /** Either "backlog", "unstarted", "started", or "done". */
  type: Type2;
  /** The name of the entity referenced. */
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const historyReferenceWorkflowStateSchema: Schema<HistoryReferenceWorkflowState> =
  s.object<HistoryReferenceWorkflowState>(
    {
      id: idSchema,
      entityType: s.string(),
      type: type2Schema,
      name: s.string(),
      _keysMap: {
        entityType: "entity_type",
      },
    },
    { additionalProperties: s.json() },
  );
