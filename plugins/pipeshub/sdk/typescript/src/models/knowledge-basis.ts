import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { folderSchema, type Folder } from "./folder.js";
import { userRole1Schema, type UserRole1 } from "./user-role1.js";

export type KnowledgeBasis = {
  id: string;
  name: string;
  connectorId: string | null;
  createdAtTimestamp: number;
  updatedAtTimestamp: number;
  createdBy: string;
  userRole: UserRole1;
  folders: Folder[];
};

export const knowledgeBasisSchema: Schema<KnowledgeBasis> = s.object<KnowledgeBasis>({
  id: s.string(),
  name: s.string(),
  connectorId: s.nullable(s.string()),
  createdAtTimestamp: s.int(),
  updatedAtTimestamp: s.int(),
  createdBy: s.string(),
  userRole: userRole1Schema,
  folders: s.array(s.lazy(() => folderSchema)),
});
