import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type WorkspacePatchRequestDto = {
  /** User-friendly alias for the Workspace. */
  alias?: string;
  /** Brief description of the Workspace. */
  description?: string;
  /** Tags associated with the Workspace. */
  tags?: string[];
};

export const workspacePatchRequestDtoSchema: Schema<WorkspacePatchRequestDto> =
  s.object<WorkspacePatchRequestDto>({
    alias: s.optional(s.string()),
    description: s.optional(s.string()),
    tags: s.optional(s.array(s.string())),
  });
