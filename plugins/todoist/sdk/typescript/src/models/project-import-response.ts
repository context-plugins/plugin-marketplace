import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { discardedFieldSchema, type DiscardedField } from "./discarded-field.js";
import {
  importedProjectViewOptionsDefaultSchema,
  type ImportedProjectViewOptionsDefault,
} from "./imported-project-view-options-default.js";
import { itemNoteSyncViewSchema, type ItemNoteSyncView } from "./item-note-sync-view.js";
import { itemSyncViewSchema, type ItemSyncView } from "./item-sync-view.js";
import { notificationSyncViewSchema, type NotificationSyncView } from "./notification-sync-view.js";
import { projectNoteSyncViewSchema, type ProjectNoteSyncView } from "./project-note-sync-view.js";
import { sectionSyncViewSchema, type SectionSyncView } from "./section-sync-view.js";
import { projectSchema, type Project } from "./unions/project.js";

export type ProjectImportResponse = {
  /** View options defaults applied to the imported project. */
  projectViewOptionsDefaults: ImportedProjectViewOptionsDefault[];
  /** Always `ok` on success. @default "ok" */
  status?: "ok";
  /** Type of template that was imported. @default "project" */
  templateType?: "project";
  /** Projects created or updated by the import. */
  projects: Project[];
  /** Sections created by the import. */
  sections: SectionSyncView[];
  /** Tasks created by the import. */
  tasks: ItemSyncView[];
  /** Task comments created by the import. */
  comments: ItemNoteSyncView[];
  /** Project comments created by the import. */
  projectNotes: ProjectNoteSyncView[];
  /** Reminders created by the import. */
  reminders: NotificationSyncView[];
  /**
   * Task properties the importer dropped from one or more imported tasks because the plan in force
   * does not include them. Empty when nothing was dropped. `reason` says which plan has to change:
   * `workspace_plan_limit` for the workspace the project belongs to, `personal_plan_limit` for the
   * importing user's own subscription.
   */
  discardedFields: DiscardedField[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectImportResponseSchema: Schema<ProjectImportResponse> = s.object<ProjectImportResponse>(
  {
    projectViewOptionsDefaults: s.array(s.lazy(() => importedProjectViewOptionsDefaultSchema)),
    status: s.defaulted(s.literal("ok"), "ok"),
    templateType: s.defaulted(s.literal("project"), "project"),
    projects: s.array(s.lazy(() => projectSchema)),
    sections: s.array(s.lazy(() => sectionSyncViewSchema)),
    tasks: s.array(s.lazy(() => itemSyncViewSchema)),
    comments: s.array(s.lazy(() => itemNoteSyncViewSchema)),
    projectNotes: s.array(s.lazy(() => projectNoteSyncViewSchema)),
    reminders: s.array(s.lazy(() => notificationSyncViewSchema)),
    discardedFields: s.array(s.lazy(() => discardedFieldSchema)),
    _keysMap: {
      projectViewOptionsDefaults: "project_view_options_defaults",
      templateType: "template_type",
      projectNotes: "project_notes",
      discardedFields: "discarded_fields",
    },
  },
  { additionalProperties: s.json() },
);
