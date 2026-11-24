import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { persistenceStatusSchema, type PersistenceStatus } from "./persistence-status.js";

/** Identity details */
export type IdentityDidlogicComKycDocumentsApi = {
  /** Identity identifier */
  id: number;
  /** Identity name */
  name: string;
  /** Owner user ID */
  userId: number;
  /** Identity creation timestamp */
  createdAt: string;
  /** Identity persistence status */
  persistenceStatus: PersistenceStatus;
  /** Is default identity flag */
  isDefault: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const identityDidlogicComKycDocumentsApiSchema: Schema<IdentityDidlogicComKycDocumentsApi> =
  s.object<IdentityDidlogicComKycDocumentsApi>(
    {
      id: s.int(),
      name: s.string(),
      userId: s.int(),
      createdAt: s.string(),
      persistenceStatus: persistenceStatusSchema,
      isDefault: s.boolean(),
      _keysMap: {
        userId: "user_id",
        createdAt: "created_at",
        persistenceStatus: "persistence_status",
        isDefault: "is_default",
      },
    },
    { additionalProperties: s.json() },
  );
