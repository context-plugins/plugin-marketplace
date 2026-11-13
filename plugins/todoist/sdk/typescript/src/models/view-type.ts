import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ViewType = {
  Filter: "FILTER",
  Label: "LABEL",
  Project: "PROJECT",
  Today: "TODAY",
  Upcoming: "UPCOMING",
  WorkspaceFilter: "WORKSPACE_FILTER",
  AssignedToMe: "ASSIGNED_TO_ME",
} as const;
export type ViewType = (typeof ViewType)[keyof typeof ViewType] | (string & {});

export const viewTypeSchema: EnumSchema<ViewType> = s.enumOf<ViewType>(ViewType);
