import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { userRoleSchema, type UserRole } from "./user-role.js";

/** Response returned when a knowledge base is created */
export type KnowledgeBaseCreateResponse = {
  /** Knowledge base ID */
  id: string;
  /** Knowledge base name */
  name: string;
  /** Creation timestamp in milliseconds */
  createdAtTimestamp: number;
  /** Last update timestamp in milliseconds */
  updatedAtTimestamp: number;
  /** User's role in this knowledge base */
  userRole: UserRole;
};

export const knowledgeBaseCreateResponseSchema: Schema<KnowledgeBaseCreateResponse> =
  s.object<KnowledgeBaseCreateResponse>({
    id: s.string(),
    name: s.string(),
    createdAtTimestamp: s.int(),
    updatedAtTimestamp: s.int(),
    userRole: userRoleSchema,
  });
