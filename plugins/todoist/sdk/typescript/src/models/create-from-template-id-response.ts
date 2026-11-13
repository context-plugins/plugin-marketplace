import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { filterSyncViewSchema, type FilterSyncView } from "./filter-sync-view.js";
import { itemNoteSyncViewSchema, type ItemNoteSyncView } from "./item-note-sync-view.js";
import { itemSyncViewSchema, type ItemSyncView } from "./item-sync-view.js";
import { labelSyncViewSchema, type LabelSyncView } from "./label-sync-view.js";
import { notificationSyncViewSchema, type NotificationSyncView } from "./notification-sync-view.js";
import { projectNoteSyncViewSchema, type ProjectNoteSyncView } from "./project-note-sync-view.js";
import { projectResponseSchema, type ProjectResponse } from "./project-response.js";
import { sectionSyncViewSchema, type SectionSyncView } from "./section-sync-view.js";
import { templateTypeSchema, type TemplateType } from "./template-type.js";
import { projectSchema, type Project } from "./unions/project.js";
import {
  userViewOptionsSyncViewInternalSchema,
  userViewOptionsSyncViewSchema,
  type UserViewOptionsSyncView,
} from "./user-view-options-sync-view.js";

export type CreateFromTemplateIdResponse = {
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
  /** Always ok on success. @default "ok" */
  status?: "ok";
  /** Created label IDs. */
  labelIds: string[];
  /** Created filter IDs. */
  filterIds: string[];
  /** Created project IDs, each wrapped in a project_id object. */
  projectIds: ProjectResponse[];
  /** Reminders created by the import. */
  reminders: NotificationSyncView[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createFromTemplateIdResponseProperties: s.Shape<CreateFromTemplateIdResponse> = {
  templateType: templateTypeSchema,
  projects: s.array(s.lazy(() => projectSchema)),
  sections: s.array(s.lazy(() => sectionSyncViewSchema)),
  items: s.array(s.lazy(() => itemSyncViewSchema)),
  notes: s.array(s.lazy(() => itemNoteSyncViewSchema)),
  projectNotes: s.array(s.lazy(() => projectNoteSyncViewSchema)),
  labels: s.array(s.lazy(() => labelSyncViewSchema)),
  filters: s.array(s.lazy(() => filterSyncViewSchema)),
  viewOptions: s.array(s.lazy(() => userViewOptionsSyncViewInternalSchema)),
  status: s.defaulted(s.literal("ok"), "ok"),
  labelIds: s.array(s.string()),
  filterIds: s.array(s.string()),
  projectIds: s.array(s.lazy(() => projectResponseSchema)),
  reminders: s.array(s.lazy(() => notificationSyncViewSchema)),
  _keysMap: {
    templateType: "template_type",
    projectNotes: "project_notes",
    viewOptions: "view_options",
    labelIds: "label_ids",
    filterIds: "filter_ids",
    projectIds: "project_ids",
  },
};

export const createFromTemplateIdResponseInternalSchema: Schema<CreateFromTemplateIdResponse> =
  s.object<CreateFromTemplateIdResponse>(createFromTemplateIdResponseProperties, {
    additionalProperties: s.json(),
  });

export const createFromTemplateIdResponseSchema: Schema<CreateFromTemplateIdResponse> = s.lazySchema(() =>
  s.object<CreateFromTemplateIdResponse>(
    {
      ...createFromTemplateIdResponseProperties,
      viewOptions: s.array(s.lazy(() => userViewOptionsSyncViewSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
