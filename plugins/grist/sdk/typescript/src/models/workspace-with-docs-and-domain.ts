import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { accessSchema, type Access } from "./access.js";
import { docSchema, type Doc } from "./doc.js";

export type WorkspaceWithDocsAndDomain = {
  id: number;
  name: string;
  access: Access;
  docs: Doc[];
  orgDomain?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workspaceWithDocsAndDomainSchema: Schema<WorkspaceWithDocsAndDomain> =
  s.object<WorkspaceWithDocsAndDomain>(
    {
      id: s.int(),
      name: s.string(),
      access: accessSchema,
      docs: s.array(s.lazy(() => docSchema)),
      orgDomain: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
