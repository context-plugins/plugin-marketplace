import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Created identity details */
export type Identity2 = {
  /** Identity identifier */
  id: number;
  /** Identity name */
  name: string;
  /** Owner user ID */
  userId: number;
  createdAt: string;
  persistenceStatus: string;
  isDefault: boolean;
  documentsCount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const identity2Schema: Schema<Identity2> = s.object<Identity2>(
  {
    id: s.int(),
    name: s.string(),
    userId: s.int(),
    createdAt: s.string(),
    persistenceStatus: s.string(),
    isDefault: s.boolean(),
    documentsCount: s.int(),
    _keysMap: {
      userId: "user_id",
      createdAt: "created_at",
      persistenceStatus: "persistence_status",
      isDefault: "is_default",
      documentsCount: "documents_count",
    },
  },
  { additionalProperties: s.json() },
);
