import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { iconSchema, type Icon } from "./icon.js";
import { projectViewStyleV1Schema, type ProjectViewStyleV1 } from "./project-view-style-v1.js";
import { apiColorId2Schema, type ApiColorId2 } from "./unions/api-color-id2.js";

export type Body9 = {
  /** Name of the project. */
  name: string | null;
  /** Description of the project. */
  description?: string | null;
  /** Parent project ID. If provided, creates this project as a sub-project */
  parentId?: string | null;
  /** Color of the project icon. */
  color?: ApiColorId2;
  /** Project icon name. Pass null or omit it for the default icon. */
  icon?: Icon | null;
  /** Whether the project is a favorite for the user. @default false */
  isFavorite?: boolean;
  /** View style of the project. */
  viewStyle?: ProjectViewStyleV1 | null;
  /** Workspace ID. If provided, creates a workspace project instead of a personal project. */
  workspaceId?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const body9Schema: Schema<Body9> = s.object<Body9>(
  {
    name: s.nullable(s.string()),
    description: s.optionalNullable(s.string()),
    parentId: s.optionalNullable(s.string()),
    color: s.optional(s.lazy(() => apiColorId2Schema)),
    icon: s.optionalNullable(s.lazy(() => iconSchema)),
    isFavorite: s.defaulted(s.boolean(), false),
    viewStyle: s.optionalNullable(s.lazy(() => projectViewStyleV1Schema)),
    workspaceId: s.optionalNullable(s.int()),
    _keysMap: {
      parentId: "parent_id",
      isFavorite: "is_favorite",
      viewStyle: "view_style",
      workspaceId: "workspace_id",
    },
  },
  { additionalProperties: s.json() },
);
