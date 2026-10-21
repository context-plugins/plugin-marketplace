import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { workspaceSchemaSchema, type WorkspaceSchema } from "./workspace-schema.js";

export type WorkspacesListResponseDto = {
  /** List of workspaces */
  items: WorkspaceSchema[];
  /** Total number of workspaces */
  count: number;
};

export const workspacesListResponseDtoSchema: Schema<WorkspacesListResponseDto> =
  s.object<WorkspacesListResponseDto>({
    items: s.array(s.lazy(() => workspaceSchemaSchema)),
    count: s.int(),
  });
