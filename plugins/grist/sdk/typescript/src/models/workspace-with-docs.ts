import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { accessSchema, type Access } from "./access.js";
import { docSchema, type Doc } from "./doc.js";

export type WorkspaceWithDocs = {
  id: number;
  name: string;
  access: Access;
  docs: Doc[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workspaceWithDocsSchema: Schema<WorkspaceWithDocs> = s.object<WorkspaceWithDocs>(
  {
    id: s.int(),
    name: s.string(),
    access: accessSchema,
    docs: s.array(s.lazy(() => docSchema)),
  },
  { additionalProperties: s.json() },
);
