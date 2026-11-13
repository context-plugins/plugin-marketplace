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

/** Project details returned after joining. */
export type Project6 = PersonalProjectSyncView | WorkspaceProjectSyncView;

export const project6Schema: Schema<Project6> = s.of<Project6>(
  s.union([s.lazy(() => personalProjectSyncViewSchema), s.lazy(() => workspaceProjectSyncViewSchema)]),
);
