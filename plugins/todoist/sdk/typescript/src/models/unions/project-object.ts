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

/** Can be either a personal or a workspace project. */
export type ProjectObject = PersonalProjectSyncView | WorkspaceProjectSyncView;

export const projectObjectSchema: Schema<ProjectObject> = s.of<ProjectObject>(
  s.union([s.lazy(() => personalProjectSyncViewSchema), s.lazy(() => workspaceProjectSyncViewSchema)]),
);
