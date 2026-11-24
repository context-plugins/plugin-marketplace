import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { workspaceSummarySchema, type WorkspaceSummary } from "./workspace-summary.js";

export type WorkspaceList = {
  total: number;
  workspaces: WorkspaceSummary[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workspaceListSchema: Schema<WorkspaceList> = s.object<WorkspaceList>(
  {
    total: s.int(),
    workspaces: s.array(s.lazy(() => workspaceSummarySchema)),
  },
  { additionalProperties: s.json() },
);
