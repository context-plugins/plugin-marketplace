import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Body12 = {
  /** Locale for curated template content, with the template's English fallback. @default "en" */
  locale?: string;
  /** Destination workspace ID. Omit to create personal projects. */
  workspaceId?: string | null;
  /** Destination folder for a project template. Requires workspace_id. Unsupported for setups. */
  folderId?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const body12Properties: s.Shape<Body12> = {
  locale: s.defaulted(s.string(), "en"),
  workspaceId: s.optionalNullable(s.string()),
  folderId: s.optionalNullable(s.string()),
  _keysMap: {
    workspaceId: "workspace_id",
    folderId: "folder_id",
  },
};

export const body12InternalSchema: Schema<Body12> = s.object<Body12>(body12Properties, {
  additionalProperties: s.json(),
});

export const body12Schema: Schema<Body12> = s.lazySchema(() =>
  s.object<Body12>(
    {
      ...body12Properties,
      locale: s.defaulted(s.string().check(s.maxLength(10)), "en"),
    },
    { additionalProperties: s.json() },
  ),
);
