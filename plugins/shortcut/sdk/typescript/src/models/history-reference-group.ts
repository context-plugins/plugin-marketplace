import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A reference to a Group. */
export type HistoryReferenceGroup = {
  /** The ID of the entity referenced. */
  id: string;
  /** The type of entity referenced. */
  entityType: string;
  /** The name of the entity referenced. */
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const historyReferenceGroupSchema: Schema<HistoryReferenceGroup> = s.object<HistoryReferenceGroup>(
  {
    id: s.string(),
    entityType: s.string(),
    name: s.string(),
    _keysMap: {
      entityType: "entity_type",
    },
  },
  { additionalProperties: s.json() },
);
