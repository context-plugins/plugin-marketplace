import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { folder1Schema, type Folder1 } from "./folder1.js";
import { userRoleSchema, type UserRole } from "./user-role.js";

/** Response returned by GET /knowledgeBase/{kbId} (getKnowledgeBase). */
export type GetKnowledgeBaseById = {
  /** Knowledge base ID */
  id: string;
  /** Knowledge base name */
  name: string;
  /** Associated connector ID (null for manual KBs) */
  connectorId: string | null;
  /** Creation timestamp in milliseconds */
  createdAtTimestamp: number;
  /** Last update timestamp in milliseconds */
  updatedAtTimestamp: number;
  /** User ID of the creator */
  createdBy: string;
  /** User's role in this knowledge base */
  userRole: UserRole;
  /** Root-level folders in this knowledge base */
  folders: Folder1[];
};

export const getKnowledgeBaseByIdSchema: Schema<GetKnowledgeBaseById> = s.object<GetKnowledgeBaseById>({
  id: s.string(),
  name: s.string(),
  connectorId: s.nullable(s.string()),
  createdAtTimestamp: s.int(),
  updatedAtTimestamp: s.int(),
  createdBy: s.string(),
  userRole: userRoleSchema,
  folders: s.array(s.lazy(() => folder1Schema)),
});
