import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { calendarSettingsSchema, type CalendarSettings } from "./calendar-settings.js";
import { groupOptionSchema, type GroupOption } from "./group-option.js";
import {
  propertySettingsInternalSchema,
  propertySettingsSchema,
  type PropertySettings,
} from "./property-settings.js";
import { sortOptionSchema, type SortOption } from "./sort-option.js";
import { sortOrderSchema, type SortOrder } from "./sort-order.js";
import { viewModeSchema, type ViewMode } from "./view-mode.js";
import { viewTypeSchema, type ViewType } from "./view-type.js";

/** User-specific display settings for a task view. */
export type UserViewOptionsSyncView = {
  /** String ID of the view options. */
  id: string;
  /** The type of view these options apply to. */
  viewType: ViewType;
  /**
   * String ID of the object the options apply to (a project, label, or filter ID, depending on
   * `view_type`), or `null` for the TODAY, UPCOMING, and ASSIGNED_TO_ME views.
   */
  objectId: string | null;
  /** Filter query applied to the view. */
  filteredBy: string | null;
  /** Attribute tasks are grouped by. */
  groupedBy: GroupOption | null;
  /** Attribute tasks are sorted by. */
  sortedBy: SortOption | null;
  /** Sort direction. */
  sortOrder: SortOrder;
  /** Whether the view options are deleted. @default false */
  isDeleted?: boolean;
  /** Layout used to display tasks. */
  viewMode: ViewMode;
  /** Whether completed tasks are shown in the view. */
  showCompletedTasks: boolean;
  /** Settings for the calendar view mode. */
  calendarSettings: CalendarSettings | null;
  /** How views show task properties, such as the due date, in every layout. */
  propertySettings: PropertySettings | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const userViewOptionsSyncViewProperties: s.Shape<UserViewOptionsSyncView> = {
  id: s.string(),
  viewType: viewTypeSchema,
  objectId: s.nullable(s.string()),
  filteredBy: s.nullable(s.string()),
  groupedBy: s.nullable(s.lazy(() => groupOptionSchema)),
  sortedBy: s.nullable(s.lazy(() => sortOptionSchema)),
  sortOrder: sortOrderSchema,
  isDeleted: s.defaulted(s.boolean(), false),
  viewMode: viewModeSchema,
  showCompletedTasks: s.boolean(),
  calendarSettings: s.nullable(s.lazy(() => calendarSettingsSchema)),
  propertySettings: s.nullable(s.lazy(() => propertySettingsInternalSchema)),
  _keysMap: {
    viewType: "view_type",
    objectId: "object_id",
    filteredBy: "filtered_by",
    groupedBy: "grouped_by",
    sortedBy: "sorted_by",
    sortOrder: "sort_order",
    isDeleted: "is_deleted",
    viewMode: "view_mode",
    showCompletedTasks: "show_completed_tasks",
    calendarSettings: "calendar_settings",
    propertySettings: "property_settings",
  },
};

export const userViewOptionsSyncViewInternalSchema: Schema<UserViewOptionsSyncView> =
  s.object<UserViewOptionsSyncView>(userViewOptionsSyncViewProperties, { additionalProperties: s.json() });

export const userViewOptionsSyncViewSchema: Schema<UserViewOptionsSyncView> = s.lazySchema(() =>
  s.object<UserViewOptionsSyncView>(
    {
      ...userViewOptionsSyncViewProperties,
      propertySettings: s.nullable(s.lazy(() => propertySettingsSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
