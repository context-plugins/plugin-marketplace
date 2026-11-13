import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contentfulLinkSchema, type ContentfulLink } from "./contentful-link.js";
import { contentfulSeoSchema, type ContentfulSeo } from "./contentful-seo.js";
import { personSchema, type Person } from "./person.js";
import { projectViewStyleV1Schema, type ProjectViewStyleV1 } from "./project-view-style-v1.js";
import { templateSource1Schema, type TemplateSource1 } from "./template-source1.js";
import { templateType1Schema, type TemplateType1 } from "./template-type1.js";

export type PublicTemplate = {
  /** Curated template slug or saved template ID (UT_ prefix). */
  id: string;
  /** Display name. */
  name: string;
  /** Project template or a complete setup. */
  templateType: TemplateType1;
  /** Short template description. */
  shortDescription: string;
  /** Full template description. */
  longDescription: string;
  /** Template instructions, or null. */
  instructions: string | null;
  /** Curated template import URL. Omitted for saved templates. */
  importUrl?: string | null;
  /** Project view. Omitted for setup templates and nullable for curated projects. */
  viewType?: ProjectViewStyleV1 | null;
  /** Thumbnail image for curated templates, or null. */
  thumbnailImage: string | null;
  /** Thumbnail image dark for curated templates, or null. */
  thumbnailImageDark: string | null;
  /** Deprecated alias for thumbnail_image. */
  coverImage: string | null;
  /** Preview image for curated templates, or null. */
  previewImage: string | null;
  /** Saved template color name. Null for curated templates. */
  templateColor: string | null;
  /** Background color for curated templates, or null. */
  backgroundColor: string | null;
  /** Background color dark for curated templates, or null. */
  backgroundColorDark: string | null;
  /** Template creator. Deleted accounts use a placeholder person. */
  creator: Person;
  /** Search engine metadata. Null for saved templates. */
  seo: ContentfulSeo | null;
  /** Related links for curated templates. */
  moreResources: ContentfulLink[];
  /** Curated category slugs. Empty for saved templates. */
  categoryIds: string[];
  /** Number of projects in a curated setup, if known. */
  projectCount?: number | null;
  /** Number of labels in a curated setup, if known. */
  labelCount?: number | null;
  /** Number of filters in a curated setup, if known. */
  filterCount?: number | null;
  /** Video url for curated templates, or null. */
  videoUrl?: string | null;
  /** Video preview image url for curated templates, or null. */
  videoPreviewImageUrl?: string | null;
  /** Video thumbnail image for curated templates, or null. */
  videoThumbnailImage?: string | null;
  /** Associated workspace ID, null for personal templates. Omitted for curated templates. */
  workspaceId?: string | null;
  /** Whether workspace members may view the saved template. Retained legacy field name. */
  sharedWithWorkspaceMembers?: boolean;
  /** Whether the caller may edit this saved template. */
  canEdit?: boolean;
  /** Last editor of a saved template. Personal templates return the creator. */
  lastEditedBy?: Person;
  /** Last workspace edit timestamp, or null if unknown or personal. */
  lastEditedAt?: Date | null;
  /** Curated templates use todoist. Personal and workspace templates use user. */
  templateSource: TemplateSource1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicTemplateSchema: Schema<PublicTemplate> = s.object<PublicTemplate>(
  {
    id: s.string(),
    name: s.string(),
    templateType: templateType1Schema,
    shortDescription: s.string(),
    longDescription: s.string(),
    instructions: s.nullable(s.string()),
    importUrl: s.optionalNullable(s.string()),
    viewType: s.optionalNullable(s.lazy(() => projectViewStyleV1Schema)),
    thumbnailImage: s.nullable(s.string()),
    thumbnailImageDark: s.nullable(s.string()),
    coverImage: s.nullable(s.string()),
    previewImage: s.nullable(s.string()),
    templateColor: s.nullable(s.string()),
    backgroundColor: s.nullable(s.string()),
    backgroundColorDark: s.nullable(s.string()),
    creator: personSchema,
    seo: s.nullable(s.lazy(() => contentfulSeoSchema)),
    moreResources: s.array(s.lazy(() => contentfulLinkSchema)),
    categoryIds: s.array(s.string()),
    projectCount: s.optionalNullable(s.int()),
    labelCount: s.optionalNullable(s.int()),
    filterCount: s.optionalNullable(s.int()),
    videoUrl: s.optionalNullable(s.string()),
    videoPreviewImageUrl: s.optionalNullable(s.string()),
    videoThumbnailImage: s.optionalNullable(s.string()),
    workspaceId: s.optionalNullable(s.string()),
    sharedWithWorkspaceMembers: s.optional(s.boolean()),
    canEdit: s.optional(s.boolean()),
    lastEditedBy: s.optional(s.lazy(() => personSchema)),
    lastEditedAt: s.optionalNullable(s.dateTime()),
    templateSource: templateSource1Schema,
    _keysMap: {
      templateType: "template_type",
      shortDescription: "short_description",
      longDescription: "long_description",
      importUrl: "import_url",
      viewType: "view_type",
      thumbnailImage: "thumbnail_image",
      thumbnailImageDark: "thumbnail_image_dark",
      coverImage: "cover_image",
      previewImage: "preview_image",
      templateColor: "template_color",
      backgroundColor: "background_color",
      backgroundColorDark: "background_color_dark",
      moreResources: "more_resources",
      categoryIds: "category_ids",
      projectCount: "project_count",
      labelCount: "label_count",
      filterCount: "filter_count",
      videoUrl: "video_url",
      videoPreviewImageUrl: "video_preview_image_url",
      videoThumbnailImage: "video_thumbnail_image",
      workspaceId: "workspace_id",
      sharedWithWorkspaceMembers: "shared_with_workspace_members",
      canEdit: "can_edit",
      lastEditedBy: "last_edited_by",
      lastEditedAt: "last_edited_at",
      templateSource: "template_source",
    },
  },
  { additionalProperties: s.json() },
);
