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

export type Subproject = PersonalProjectSyncView | WorkspaceProjectSyncView;

export const subprojectSchema: Schema<Subproject> = s.of<Subproject>(
  s.union([s.lazy(() => personalProjectSyncViewSchema), s.lazy(() => workspaceProjectSyncViewSchema)]),
);
