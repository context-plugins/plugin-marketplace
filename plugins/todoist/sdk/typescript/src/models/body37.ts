import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  templateContentInternalSchema,
  templateContentSchema,
  type TemplateContent,
} from "./template-content.js";
import { apiColorId2Schema, type ApiColorId2 } from "./unions/api-color-id2.js";

export type Body37 = {
  /** Saved templates support project content only. @default "project" */
  templateType?: "project";
  /** Saved template name, up to 255 characters. */
  name: string;
  /** Saved template description, up to 1,000 characters. */
  description: string;
  /** Source project. Required even with content, for access and provenance. */
  projectId: string;
  /** Template color. */
  color: ApiColorId2;
  /**
   * Associate with the source project workspace as a restricted template. Defaults to a personal
   * template.
   *
   * @default false
   */
  forWorkspace?: boolean;
  /**
   * Full replacement graph instead of exporting the source project. Uses the supported writable
   * fields of a raw preview, including optional calendar defaults. IDs refer only to nodes in this
   * payload. project_id is still required for access and provenance.
   */
  content?: TemplateContent | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const body37Properties: s.Shape<Body37> = {
  templateType: s.defaulted(s.literal("project"), "project"),
  name: s.string(),
  description: s.string(),
  projectId: s.string(),
  color: apiColorId2Schema,
  forWorkspace: s.defaulted(s.boolean(), false),
  content: s.optionalNullable(s.lazy(() => templateContentInternalSchema)),
  _keysMap: {
    templateType: "template_type",
    projectId: "project_id",
    forWorkspace: "for_workspace",
  },
};

export const body37InternalSchema: Schema<Body37> = s.object<Body37>(body37Properties, {
  additionalProperties: s.json(),
});

export const body37Schema: Schema<Body37> = s.lazySchema(() =>
  s.object<Body37>(
    {
      ...body37Properties,
      name: s.string().check(s.maxLength(255)),
      description: s.string().check(s.maxLength(1000)),
      content: s.optionalNullable(s.lazy(() => templateContentSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
