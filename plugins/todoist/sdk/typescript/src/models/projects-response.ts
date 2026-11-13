import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { workspaceProjectViewSchema, type WorkspaceProjectView } from "./workspace-project-view.js";

export type ProjectsResponse = {
  /** Whether another page of results is available. */
  hasMore: boolean;
  /** Cursor for the next page of results. */
  nextCursor?: string;
  /** Workspace projects in the current page. */
  workspaceProjects: WorkspaceProjectView[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectsResponseSchema: Schema<ProjectsResponse> = s.object<ProjectsResponse>(
  {
    hasMore: s.boolean(),
    nextCursor: s.optional(s.string()),
    workspaceProjects: s.array(s.lazy(() => workspaceProjectViewSchema)),
    _keysMap: {
      hasMore: "has_more",
      nextCursor: "next_cursor",
      workspaceProjects: "workspace_projects",
    },
  },
  { additionalProperties: s.json() },
);
