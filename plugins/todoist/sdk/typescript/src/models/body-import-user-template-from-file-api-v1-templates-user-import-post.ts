import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { apiColorId2Schema, type ApiColorId2 } from "./unions/api-color-id2.js";

export type BodyImportUserTemplateFromFileApiV1TemplatesUserImportPost = {
  /** Saved templates support project content only. @default "project" */
  templateType?: "project";
  /** Saved template name, up to 255 characters. */
  name: string;
  /** Saved template description, up to 1,000 characters. */
  description: string;
  /** Template color. */
  color: ApiColorId2;
  /**
   * Staged filename from /templates/user/preview, owned by the caller. Mutually exclusive with
   * content.
   */
  uploadedFileName?: string | null;
  file?: Uint8Array;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const bodyImportUserTemplateFromFileApiV1TemplatesUserImportPostProperties: s.Shape<BodyImportUserTemplateFromFileApiV1TemplatesUserImportPost> =
  {
    templateType: s.defaulted(s.literal("project"), "project"),
    name: s.string(),
    description: s.string(),
    color: apiColorId2Schema,
    uploadedFileName: s.optionalNullable(s.string()),
    file: s.optional(s.bytes()),
    _keysMap: {
      templateType: "template_type",
      uploadedFileName: "uploaded_file_name",
    },
  };

export const bodyImportUserTemplateFromFileApiV1TemplatesUserImportPostInternalSchema: Schema<BodyImportUserTemplateFromFileApiV1TemplatesUserImportPost> =
  s.object<BodyImportUserTemplateFromFileApiV1TemplatesUserImportPost>(
    bodyImportUserTemplateFromFileApiV1TemplatesUserImportPostProperties,
    { additionalProperties: s.json() },
  );

export const bodyImportUserTemplateFromFileApiV1TemplatesUserImportPostSchema: Schema<BodyImportUserTemplateFromFileApiV1TemplatesUserImportPost> =
  s.lazySchema(() =>
    s.object<BodyImportUserTemplateFromFileApiV1TemplatesUserImportPost>(
      {
        ...bodyImportUserTemplateFromFileApiV1TemplatesUserImportPostProperties,
        name: s.string().check(s.maxLength(255)),
        description: s.string().check(s.maxLength(1000)),
      },
      { additionalProperties: s.json() },
    ),
  );
