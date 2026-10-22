import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WorkspaceCreateRequestDto = {
  /** Unique identifier for the Workspace. */
  workspaceId: string;
  /** User-friendly alias for the Workspace. */
  alias?: string;
  /** Brief description of the Workspace. */
  description?: string;
  /** Tags associated with the Workspace. */
  tags?: string[];
};

export const workspaceCreateRequestDtoSchema: Schema<WorkspaceCreateRequestDto> =
  s.object<WorkspaceCreateRequestDto>({
    workspaceId: s.string(),
    alias: s.optional(s.string()),
    description: s.optional(s.string()),
    tags: s.optional(s.array(s.string())),
  });
