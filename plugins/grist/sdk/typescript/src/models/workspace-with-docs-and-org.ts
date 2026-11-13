import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { accessSchema, type Access } from "./access.js";
import { docSchema, type Doc } from "./doc.js";
import { orgSchema, type Org } from "./org.js";

export type WorkspaceWithDocsAndOrg = {
  id: number;
  name: string;
  access: Access;
  docs: Doc[];
  org: Org;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workspaceWithDocsAndOrgSchema: Schema<WorkspaceWithDocsAndOrg> =
  s.object<WorkspaceWithDocsAndOrg>(
    {
      id: s.int(),
      name: s.string(),
      access: accessSchema,
      docs: s.array(s.lazy(() => docSchema)),
      org: orgSchema,
    },
    { additionalProperties: s.json() },
  );
