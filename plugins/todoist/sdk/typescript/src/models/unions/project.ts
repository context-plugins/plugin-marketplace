import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  personalProjectSyncViewSchema,
  type PersonalProjectSyncView,
} from "../personal-project-sync-view.js";
import {
  workspaceProjectSyncViewSchema,
  type WorkspaceProjectSyncView,
} from "../workspace-project-sync-view.js";

export type Project = PersonalProjectSyncView | WorkspaceProjectSyncView;

export const projectSchema: Schema<Project> = s.of<Project>(
  s.union([s.lazy(() => personalProjectSyncViewSchema), s.lazy(() => workspaceProjectSyncViewSchema)]),
);
