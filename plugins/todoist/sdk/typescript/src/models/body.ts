import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Body = {
  /** ID of the project to move the task to */
  projectId?: string | null;
  /** ID of the section to move the task to */
  sectionId?: string | null;
  /** ID of the parent task to move the task under */
  parentId?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const bodySchema: Schema<Body> = s.object<Body>(
  {
    projectId: s.optionalNullable(s.string()),
    sectionId: s.optionalNullable(s.string()),
    parentId: s.optionalNullable(s.string()),
    _keysMap: {
      projectId: "project_id",
      sectionId: "section_id",
      parentId: "parent_id",
    },
  },
  { additionalProperties: s.json() },
);
