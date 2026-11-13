import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Body24 = {
  /** Curated template slug or saved template ID with a `UT_` prefix. */
  templateId: string;
  /** Project name. Empty or omitted uses the localized template name. */
  name?: string;
  /** Locale for curated template content, with the template's English fallback. @default "en" */
  locale?: string;
  /** Destination workspace ID. Omit to create a personal project. */
  workspaceId?: string | null;
  /** Destination folder ID. Requires workspace_id and a folder in that workspace. */
  folderId?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const body24Properties: s.Shape<Body24> = {
  templateId: s.string(),
  name: s.optional(s.string()),
  locale: s.defaulted(s.string(), "en"),
  workspaceId: s.optionalNullable(s.string()),
  folderId: s.optionalNullable(s.string()),
  _keysMap: {
    templateId: "template_id",
    workspaceId: "workspace_id",
    folderId: "folder_id",
  },
};

export const body24InternalSchema: Schema<Body24> = s.object<Body24>(body24Properties, {
  additionalProperties: s.json(),
});

export const body24Schema: Schema<Body24> = s.lazySchema(() =>
  s.object<Body24>(
    {
      ...body24Properties,
      locale: s.defaulted(s.string().check(s.maxLength(10)), "en"),
    },
    { additionalProperties: s.json() },
  ),
);
