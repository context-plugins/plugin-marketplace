import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { colorAsanaProjectsApiSchema, type ColorAsanaProjectsApi } from "./color-asana-projects-api.js";
import { customFieldCompactSchema, type CustomFieldCompact } from "./custom-field-compact.js";
import {
  customFieldSettingCompactSchema,
  type CustomFieldSettingCompact,
} from "./custom-field-setting-compact.js";
import {
  customFieldSettingResponseSchema,
  type CustomFieldSettingResponse,
} from "./custom-field-setting-response.js";
import { defaultViewSchema, type DefaultView } from "./default-view.js";
import { iconSchema, type Icon } from "./icon.js";
import {
  projectStatusResponseAsanaProjectsApiSchema,
  type ProjectStatusResponseAsanaProjectsApi,
} from "./project-status-response-asana-projects-api.js";
import { projectTemplateCompactSchema, type ProjectTemplateCompact } from "./project-template-compact.js";
import {
  statusUpdateCompactAsanaProjectsApiSchema,
  type StatusUpdateCompactAsanaProjectsApi,
} from "./status-update-compact-asana-projects-api.js";
import { teamCompactSchema, type TeamCompact } from "./team-compact.js";
import { userCompactSchema, type UserCompact } from "./user-compact.js";
import { userCompact1Schema, type UserCompact1 } from "./user-compact1.js";
import { workspaceCompactSchema, type WorkspaceCompact } from "./workspace-compact.js";

export type ProjectResponse = {
  /** Globally unique identifier of the resource, as a string. */
  gid?: string;
  /** The base type of this resource. */
  resourceType?: string;
  /**
   * Name of the project. This is generally a short sentence fragment that fits on a line in the UI
   * for maximum readability. However, it can be longer.
   */
  name?: string;
  /**
   * True if the project is archived, false if not. Archived projects do not show in the UI by
   * default and may be treated differently for queries.
   */
  archived?: boolean;
  /** Color of the project. */
  color?: ColorAsanaProjectsApi | null;
  /** The time at which this resource was created. */
  createdAt?: Date;
  /**
   * *Deprecated: new integrations should prefer the `current_status_update` resource.*
   */
  currentStatus?: ProjectStatusResponseAsanaProjectsApi;
  /** The latest `status_update` posted to this project. */
  currentStatusUpdate?: StatusUpdateCompactAsanaProjectsApi;
  /** Array of Custom Field Settings (in compact form). */
  customFieldSettings?: CustomFieldSettingResponse[];
  /** The default view (list, board, calendar, or timeline) of a project. */
  defaultView?: DefaultView;
  /**
   * *Deprecated: new integrations should prefer the `due_on` field.*
   */
  dueDate?: Date | null;
  /** The day on which this project is due. This takes a date with format YYYY-MM-DD. */
  dueOn?: Date | null;
  /** [Opt In](/docs/input-output-options). The notes of the project with formatting as HTML. */
  htmlNotes?: string;
  /**
   * [Opt In](/docs/input-output-options). *Deprecated - please use a project template endpoint
   * instead (more in [this forum
   * post](https://forum.asana.com/t/a-new-api-for-project-templates/156432)).* Determines if the
   * project is a template.
   */
  isTemplate?: boolean;
  /** Array of users who are members of this project. */
  members?: UserCompact[];
  /**
   * The time at which this project was last modified. *Note: This does not currently reflect any
   * changes in associations such as tasks or comments that may have been added or removed from the
   * project.*
   */
  modifiedAt?: Date;
  /** Free-form textual information associated with the project (ie., its description). */
  notes?: string;
  /** True if the project is public to its team. */
  public?: boolean;
  /**
   * The day on which work for this project begins, or null if the project has no start date. This
   * takes a date with `YYYY-MM-DD` format. *Note: `due_on` or `due_at` must be present in the
   * request when setting or unsetting the `start_on` parameter. Additionally, `start_on` and
   * `due_on` cannot be the same date.*
   */
  startOn?: string | null;
  workspace?: WorkspaceCompact;
  /** Array of Custom Fields. */
  customFields?: CustomFieldCompact[];
  /** True if the project is currently marked complete, false if not. */
  completed?: boolean;
  /** The time at which this project was completed, or null if the project is not completed. */
  completedAt?: Date | null;
  /** The user that marked this project complete, or null if the project is not completed. */
  completedBy?: UserCompact1;
  /**
   * Array of users following this project. Followers are a subset of members who have opted in to
   * receive "tasks added" notifications for a project.
   */
  followers?: UserCompact[];
  /** The current owner of the project, may be null. */
  owner?: UserCompact;
  team?: TeamCompact;
  /** The icon for a project. */
  icon?: Icon | null;
  /** A url that points directly to the object within Asana. */
  permalinkUrl?: string;
  projectBrief?: CustomFieldSettingCompact;
  createdFromTemplate?: ProjectTemplateCompact;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectResponseSchema: Schema<ProjectResponse> = s.object<ProjectResponse>(
  {
    gid: s.optional(s.string()),
    resourceType: s.optional(s.string()),
    name: s.optional(s.string()),
    archived: s.optional(s.boolean()),
    color: s.optionalNullable(s.lazy(() => colorAsanaProjectsApiSchema)),
    createdAt: s.optional(s.dateTime()),
    currentStatus: s.optional(s.lazy(() => projectStatusResponseAsanaProjectsApiSchema)),
    currentStatusUpdate: s.optional(s.lazy(() => statusUpdateCompactAsanaProjectsApiSchema)),
    customFieldSettings: s.optional(s.array(s.lazy(() => customFieldSettingResponseSchema))),
    defaultView: s.optional(s.lazy(() => defaultViewSchema)),
    dueDate: s.optionalNullable(s.dateTime()),
    dueOn: s.optionalNullable(s.dateTime()),
    htmlNotes: s.optional(s.string()),
    isTemplate: s.optional(s.boolean()),
    members: s.optional(s.array(s.lazy(() => userCompactSchema))),
    modifiedAt: s.optional(s.dateTime()),
    notes: s.optional(s.string()),
    public: s.optional(s.boolean()),
    startOn: s.optionalNullable(s.dateOnly()),
    workspace: s.optional(s.lazy(() => workspaceCompactSchema)),
    customFields: s.optional(s.array(s.lazy(() => customFieldCompactSchema))),
    completed: s.optional(s.boolean()),
    completedAt: s.optionalNullable(s.dateTime()),
    completedBy: s.optional(s.lazy(() => userCompact1Schema)),
    followers: s.optional(s.array(s.lazy(() => userCompactSchema))),
    owner: s.optional(s.lazy(() => userCompactSchema)),
    team: s.optional(s.lazy(() => teamCompactSchema)),
    icon: s.optionalNullable(s.lazy(() => iconSchema)),
    permalinkUrl: s.optional(s.string()),
    projectBrief: s.optional(s.lazy(() => customFieldSettingCompactSchema)),
    createdFromTemplate: s.optional(s.lazy(() => projectTemplateCompactSchema)),
    _keysMap: {
      resourceType: "resource_type",
      createdAt: "created_at",
      currentStatus: "current_status",
      currentStatusUpdate: "current_status_update",
      customFieldSettings: "custom_field_settings",
      defaultView: "default_view",
      dueDate: "due_date",
      dueOn: "due_on",
      htmlNotes: "html_notes",
      isTemplate: "is_template",
      modifiedAt: "modified_at",
      startOn: "start_on",
      customFields: "custom_fields",
      completedAt: "completed_at",
      completedBy: "completed_by",
      permalinkUrl: "permalink_url",
      projectBrief: "project_brief",
      createdFromTemplate: "created_from_template",
    },
  },
  { additionalProperties: s.json() },
);
