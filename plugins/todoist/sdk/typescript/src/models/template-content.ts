import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contentItemInternalSchema, contentItemSchema, type ContentItem } from "./content-item.js";
import { contentNoteInternalSchema, contentNoteSchema, type ContentNote } from "./content-note.js";
import {
  contentProjectNoteInternalSchema,
  contentProjectNoteSchema,
  type ContentProjectNote,
} from "./content-project-note.js";
import {
  contentProjectViewOptionsDefaultsSchema,
  type ContentProjectViewOptionsDefaults,
} from "./content-project-view-options-defaults.js";
import {
  contentProjectInternalSchema,
  contentProjectSchema,
  type ContentProject,
} from "./content-project.js";
import {
  contentSectionInternalSchema,
  contentSectionSchema,
  type ContentSection,
} from "./content-section.js";

/**
 * Full replacement graph using the supported writable projection of a raw preview. IDs refer only
 * to nodes within this payload. At most 5,000 objects across sections, tasks, comments and calendar
 * defaults are allowed, with at least one section or task. Setup templates are not supported.
 * Templates don't carry reminders, so a `reminders` key is ignored like any other unknown one.
 *
 * Collection names (`items`, `notes`) and actor fields retain the existing Sync API names.
 */
export type TemplateContent = {
  /** Zero or one project, describing layout, description and icon. */
  projects?: ContentProject[];
  /**
   * Calendar settings implicitly associated with the sole calendar project. Objects do not include
   * a project identifier. Invalid optional calendar metadata is ignored.
   */
  projectViewOptionsDefaults?: ContentProjectViewOptionsDefaults[];
  /** Sections in the replacement graph. */
  sections?: ContentSection[];
  /** Tasks in the replacement graph. */
  items?: ContentItem[];
  /** Task comments, linked by item_id. */
  notes?: ContentNote[];
  /** Project comments. */
  projectNotes?: ContentProjectNote[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const templateContentProperties: s.Shape<TemplateContent> = {
  projects: s.optional(s.array(s.lazy(() => contentProjectInternalSchema))),
  projectViewOptionsDefaults: s.optional(s.array(s.lazy(() => contentProjectViewOptionsDefaultsSchema))),
  sections: s.optional(s.array(s.lazy(() => contentSectionInternalSchema))),
  items: s.optional(s.array(s.lazy(() => contentItemInternalSchema))),
  notes: s.optional(s.array(s.lazy(() => contentNoteInternalSchema))),
  projectNotes: s.optional(s.array(s.lazy(() => contentProjectNoteInternalSchema))),
  _keysMap: {
    projectViewOptionsDefaults: "project_view_options_defaults",
    projectNotes: "project_notes",
  },
};

export const templateContentInternalSchema: Schema<TemplateContent> = s.object<TemplateContent>(
  templateContentProperties,
  { additionalProperties: s.json() },
);

export const templateContentSchema: Schema<TemplateContent> = s.lazySchema(() =>
  s.object<TemplateContent>(
    {
      ...templateContentProperties,
      projects: s.optional(s.array(s.lazy(() => contentProjectSchema))),
      projectViewOptionsDefaults: s.optional(
        s.array(s.lazy(() => contentProjectViewOptionsDefaultsSchema)).check(s.maxLength(1)),
      ),
      sections: s.optional(s.array(s.lazy(() => contentSectionSchema))),
      items: s.optional(s.array(s.lazy(() => contentItemSchema))),
      notes: s.optional(s.array(s.lazy(() => contentNoteSchema))),
      projectNotes: s.optional(s.array(s.lazy(() => contentProjectNoteSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
