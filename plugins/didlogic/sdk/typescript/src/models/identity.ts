import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Identity = {
  /** Identity identifier */
  id: number;
  /** Identity name */
  name: string;
  /** Owner user ID */
  userId: number;
  /** Creation timestamp */
  createdAt: string;
  persistenceStatus: string;
  isDefault: boolean;
  /** Number of documents in this identity */
  documentsCount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const identitySchema: Schema<Identity> = s.object<Identity>(
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
