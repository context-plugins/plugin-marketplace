import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { icon1Schema, type Icon1 } from "./icon1.js";
import { ProjectViewStyleV1, projectViewStyleV1Schema } from "./project-view-style-v1.js";

export type ContentProject = {
  /** Project layout. @default ProjectViewStyleV1.List */
  viewStyle?: ProjectViewStyleV1;
  /** Project description. */
  description?: string;
  /** Project icon name, or null for the default icon. */
  icon?: Icon1 | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const contentProjectProperties: s.Shape<ContentProject> = {
  viewStyle: s.defaulted(projectViewStyleV1Schema, ProjectViewStyleV1.List),
  description: s.optional(s.string()),
  icon: s.optionalNullable(s.lazy(() => icon1Schema)),
  _keysMap: {
    viewStyle: "view_style",
  },
};

export const contentProjectInternalSchema: Schema<ContentProject> = s.object<ContentProject>(
  contentProjectProperties,
  { additionalProperties: s.json() },
);

export const contentProjectSchema: Schema<ContentProject> = s.lazySchema(() =>
  s.object<ContentProject>(
    {
      ...contentProjectProperties,
      description: s.optional(s.string().check(s.maxLength(16383))),
    },
    { additionalProperties: s.json() },
  ),
);
