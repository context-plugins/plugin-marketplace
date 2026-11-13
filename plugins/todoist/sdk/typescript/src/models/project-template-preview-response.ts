import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { itemNoteSyncViewSchema, type ItemNoteSyncView } from "./item-note-sync-view.js";
import { itemSyncViewSchema, type ItemSyncView } from "./item-sync-view.js";
import { notificationSyncViewSchema, type NotificationSyncView } from "./notification-sync-view.js";
import { projectNoteSyncViewSchema, type ProjectNoteSyncView } from "./project-note-sync-view.js";
import { sectionSyncViewSchema, type SectionSyncView } from "./section-sync-view.js";
import {
  templateProjectViewOptionsDefaultsSnapshotSchema,
  type TemplateProjectViewOptionsDefaultsSnapshot,
} from "./template-project-view-options-defaults-snapshot.js";
import { templateTypeSchema, type TemplateType } from "./template-type.js";
import { projectSchema, type Project } from "./unions/project.js";

export type ProjectTemplatePreviewResponse = {
  /** Template type: project or setup. */
  templateType: TemplateType;
  /** Projects in the template's sync-style graph. */
  projects: Project[];
  /** Sections in the template's sync-style graph. */
  sections: SectionSyncView[];
  /** Tasks in the graph. Uses the existing sync-style `items` name. */
  items: ItemSyncView[];
  /** Task comments in the graph. Uses the existing sync-style `notes` name. */
  notes: ItemNoteSyncView[];
  /** Project comments in the graph. */
  projectNotes: ProjectNoteSyncView[];
  /**
   * Calendar settings stored by the project template, implicitly associated with its sole project.
   */
  projectViewOptionsDefaults: TemplateProjectViewOptionsDefaultsSnapshot[];
  /** Workspace associated with a saved template, otherwise null. */
  workspaceId: string | null;
  /** Always empty: templates don't carry reminders. */
  reminders: NotificationSyncView[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectTemplatePreviewResponseSchema: Schema<ProjectTemplatePreviewResponse> =
  s.object<ProjectTemplatePreviewResponse>(
    {
      templateType: templateTypeSchema,
      projects: s.array(s.lazy(() => projectSchema)),
      sections: s.array(s.lazy(() => sectionSyncViewSchema)),
      items: s.array(s.lazy(() => itemSyncViewSchema)),
      notes: s.array(s.lazy(() => itemNoteSyncViewSchema)),
      projectNotes: s.array(s.lazy(() => projectNoteSyncViewSchema)),
      projectViewOptionsDefaults: s.array(s.lazy(() => templateProjectViewOptionsDefaultsSnapshotSchema)),
      workspaceId: s.nullable(s.string()),
      reminders: s.array(s.lazy(() => notificationSyncViewSchema)),
      _keysMap: {
        templateType: "template_type",
        projectNotes: "project_notes",
        projectViewOptionsDefaults: "project_view_options_defaults",
        workspaceId: "workspace_id",
      },
    },
    { additionalProperties: s.json() },
  );
