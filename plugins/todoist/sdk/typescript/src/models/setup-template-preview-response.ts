import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { filterSyncViewSchema, type FilterSyncView } from "./filter-sync-view.js";
import { folderViewSchema, type FolderView } from "./folder-view.js";
import { itemNoteSyncViewSchema, type ItemNoteSyncView } from "./item-note-sync-view.js";
import { itemSyncViewSchema, type ItemSyncView } from "./item-sync-view.js";
import { labelSyncViewSchema, type LabelSyncView } from "./label-sync-view.js";
import { notificationSyncViewSchema, type NotificationSyncView } from "./notification-sync-view.js";
import { projectNoteSyncViewSchema, type ProjectNoteSyncView } from "./project-note-sync-view.js";
import { sectionSyncViewSchema, type SectionSyncView } from "./section-sync-view.js";
import { templateTypeSchema, type TemplateType } from "./template-type.js";
import { projectSchema, type Project } from "./unions/project.js";
import {
  userViewOptionsSyncViewInternalSchema,
  userViewOptionsSyncViewSchema,
  type UserViewOptionsSyncView,
} from "./user-view-options-sync-view.js";

export type SetupTemplatePreviewResponse = {
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
  /** Labels in a setup, or an empty list for project use. */
  labels: LabelSyncView[];
  /** Filters in a setup, or an empty list for project use. */
  filters: FilterSyncView[];
  /** User view options in the template graph. */
  viewOptions: UserViewOptionsSyncView[];
  /** Workspace associated with a saved template, otherwise null. */
  workspaceId: string | null;
  /** Folders in the setup preview. */
  folders: FolderView[];
  /** Always empty: templates don't carry reminders. */
  reminders: NotificationSyncView[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const setupTemplatePreviewResponseProperties: s.Shape<SetupTemplatePreviewResponse> = {
  templateType: templateTypeSchema,
  projects: s.array(s.lazy(() => projectSchema)),
  sections: s.array(s.lazy(() => sectionSyncViewSchema)),
  items: s.array(s.lazy(() => itemSyncViewSchema)),
  notes: s.array(s.lazy(() => itemNoteSyncViewSchema)),
  projectNotes: s.array(s.lazy(() => projectNoteSyncViewSchema)),
  labels: s.array(s.lazy(() => labelSyncViewSchema)),
  filters: s.array(s.lazy(() => filterSyncViewSchema)),
  viewOptions: s.array(s.lazy(() => userViewOptionsSyncViewInternalSchema)),
  workspaceId: s.nullable(s.string()),
  folders: s.array(s.lazy(() => folderViewSchema)),
  reminders: s.array(s.lazy(() => notificationSyncViewSchema)),
  _keysMap: {
    templateType: "template_type",
    projectNotes: "project_notes",
    viewOptions: "view_options",
    workspaceId: "workspace_id",
  },
};

export const setupTemplatePreviewResponseInternalSchema: Schema<SetupTemplatePreviewResponse> =
  s.object<SetupTemplatePreviewResponse>(setupTemplatePreviewResponseProperties, {
    additionalProperties: s.json(),
  });

export const setupTemplatePreviewResponseSchema: Schema<SetupTemplatePreviewResponse> = s.lazySchema(() =>
  s.object<SetupTemplatePreviewResponse>(
    {
      ...setupTemplatePreviewResponseProperties,
      viewOptions: s.array(s.lazy(() => userViewOptionsSyncViewSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
