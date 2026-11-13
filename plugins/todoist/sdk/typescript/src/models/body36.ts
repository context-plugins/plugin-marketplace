import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { icon2Schema, type Icon2 } from "./icon2.js";
import { projectViewStyleV1Schema, type ProjectViewStyleV1 } from "./project-view-style-v1.js";
import { apiColorId2Schema, type ApiColorId2 } from "./unions/api-color-id2.js";

export type Body36 = {
  /** Updated project name. Passing null or omitting this field will leave it unchanged. */
  name?: string | null;
  /** Updated project description. Passing null or omitting this field will leave it unchanged. */
  description?: string | null;
  /** Updated project color. Passing null or omitting this field will leave it unchanged. */
  color?: ApiColorId2 | null;
  /**
   * Updated project icon name. Pass null to reset to the default icon. Omit this field to keep it
   * unchanged.
   */
  icon?: Icon2 | null;
  /**
   * Whether the project is marked as a favorite. Passing null or omitting this field will leave it
   * unchanged.
   */
  isFavorite?: boolean | null;
  /** Updated project view style. Passing null or omitting this field will leave it unchanged. */
  viewStyle?: ProjectViewStyleV1 | null;
  /**
   * Updated position of the project in the hierarchy. Only supported for personal projects. Passing
   * null or omitting this field will leave it unchanged.
   */
  childOrder?: number | null;
  /**
   * Whether the project is collapsed. Passing null or omitting this field will leave it unchanged.
   */
  isCollapsed?: boolean | null;
  /**
   * Folder to move the project into. Only supported for workspace projects. Pass null to clear the
   * value. Omit this field to keep it unchanged.
   */
  folderId?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const body36Properties: s.Shape<Body36> = {
  name: s.optionalNullable(s.string()),
  description: s.optionalNullable(s.string()),
  color: s.optionalNullable(s.lazy(() => apiColorId2Schema)),
  icon: s.optionalNullable(s.lazy(() => icon2Schema)),
  isFavorite: s.optionalNullable(s.boolean()),
  viewStyle: s.optionalNullable(s.lazy(() => projectViewStyleV1Schema)),
  childOrder: s.optionalNullable(s.int()),
  isCollapsed: s.optionalNullable(s.boolean()),
  folderId: s.optionalNullable(s.int()),
  _keysMap: {
    isFavorite: "is_favorite",
    viewStyle: "view_style",
    childOrder: "child_order",
    isCollapsed: "is_collapsed",
    folderId: "folder_id",
  },
};

export const body36InternalSchema: Schema<Body36> = s.object<Body36>(body36Properties, {
  additionalProperties: s.json(),
});

export const body36Schema: Schema<Body36> = s.lazySchema(() =>
  s.object<Body36>(
    {
      ...body36Properties,
      childOrder: s.optionalNullable(s.int().check(s.gte(-2147483648), s.lte(2147483647))),
      folderId: s.optionalNullable(s.int().check(s.gt(0))),
    },
    { additionalProperties: s.json() },
  ),
);
